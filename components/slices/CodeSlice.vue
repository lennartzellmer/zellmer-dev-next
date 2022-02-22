<template>
  <pre
    class="rounded-lg"
  ><code :class="'language-' + slice.primary.language" >{{ $prismic.asText(slice.primary.code) }}</code>
  </pre>
</template>

<script lang="ts">
import { highlightAll } from 'prismjs'
import { defineComponent, onMounted } from '#imports'
import '~/assets/css/prism-theme.css'

import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-toml'

export default defineComponent({
  name: 'CodeSlice',
  props: {
    slice: {
      required: true,
      type: Object,
    },
  },
  setup() {
    onMounted(() => {
      window.Prism = window.Prism || {}
      highlightAll() // highlight your code on mount
    })
  },
})
</script>
