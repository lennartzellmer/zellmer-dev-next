<script lang="ts">
import 'highlight.js/styles/github-dark.css'
import highlightjs from '../highlightjs'
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'CodeSlice',
  components: {
    Highlightjs: highlightjs,
  },
  props: {
    slice: {
      required: true,
      type: Object,
    },
  },
})
</script>

<template>
  <Highlightjs
    class="overflow-hidden rounded-lg"
    :language="slice.primary.language"
    :code="$prismic.asText(slice.primary.code)"
  />
</template>
