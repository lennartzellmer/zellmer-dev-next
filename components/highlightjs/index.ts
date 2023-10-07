import { computed, defineComponent, h, ref, watch } from 'vue'
import hljs from 'highlight.js/lib/core'
import type { Language } from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import typescript from 'highlight.js/lib/languages/typescript'

function hljsDefineVue(hljs: any): Language {
  return {
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<!--', '-->', {
        relevance: 10,
      }),
      {
        begin: /^(\s*)(<template>)/gm,
        end: /^(\s*)(<\/template>)/gm,
        subLanguage: 'xml',
        contains: [{ begin: '/\\*', end: '\\*/', skip: true }],
      },
      {
        begin: /^(\s*)(<script>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: 'javascript',
        contains: [{ begin: '/\\*', end: '\\*/', skip: true }],
      },
      {
        begin: /^(?:\s*)(?:<script\s+lang=(["'])ts\1>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: 'typescript',
        contains: [{ begin: '/\\*', end: '\\*/', skip: true }],
      },
      {
        begin: /^(\s*)(<style(\s+scoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: 'css',
        contains: [{ begin: '/\\*', end: '\\*/', skip: true }],
      },
      {
        begin:
          /^(?:\s*)(?:<style(?:\s+scoped)?\s+lang=(["'])(?:s[ca]ss)\1(?:\s+scoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: 'scss',
        contains: [{ begin: '/\\*', end: '\\*/', skip: true }],
      },
      {
        begin:
          /^(?:\s*)(?:<style(?:\s+scoped)?\s+lang=(["'])stylus\1(?:\s+scoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: 'stylus',
        contains: [{ begin: '/\\*', end: '\\*/', skip: true }],
      },
    ],
  }
}

export default defineComponent({
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: '',
    },
    autodetect: {
      type: Boolean,
      default: false,
    },
    ignoreIllegals: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const language = ref(props.language)
    hljs.registerLanguage('javascript', javascript)
    hljs.registerLanguage('css', css)
    hljs.registerLanguage('bash', bash)
    hljs.registerLanguage('scss', scss)
    hljs.registerLanguage('xml', xml)
    hljs.registerLanguage('vue', hljsDefineVue)
    hljs.registerLanguage('typescript', typescript)

    watch(
      () => props.language,
      (newLanguage) => {
        language.value = newLanguage
      },
    )

    const className = computed((): string => {
      return `hljs ${language.value}`
    })

    const highlightedCode = computed((): string => {
      const result = hljs.highlight(props.code, {
        language: language.value,
        ignoreIllegals: false,
      })
      return result.value
    })

    return {
      className,
      highlightedCode,
    }
  },
  render() {
    return h('pre', {}, [
      h('code', {
        class: this.className,
        innerHTML: this.highlightedCode,
      }),
    ])
  },
})
