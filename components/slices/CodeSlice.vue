<template>
  <highlightjs
    class="rounded-lg overflow-hidden"
    :language="slice.primary.language"
    :code="$prismic.asText(slice.primary.code)"
  />
</template>

<script lang="ts">
import 'highlight.js/styles/github.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'CodeSlice',
  components: {
    highlightjs: hljsVuePlugin.component,
  },
  props: {
    slice: {
      required: true,
      type: Object,
    },
  },
  setup() {},
  mounted() {},
})
</script>
