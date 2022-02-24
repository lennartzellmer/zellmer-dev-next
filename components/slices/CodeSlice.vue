<template>
  <highlightjs
    class="rounded-lg overflow-hidden"
    :language="slice.primary.language"
    :code="$prismic.asText(slice.primary.code)"
  />
</template>

<script lang="ts">
import 'highlight.js/styles/github.css'
import highlightjs from '../highlightjs'
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'CodeSlice',
  components: {
    highlightjs,
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
