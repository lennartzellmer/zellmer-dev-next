<template>
  <div>
    <prismic-rich-text class="mt-8 break-words" :field="slice.primary.text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'TextSlice',
  props: {
    slice: {
      required: true,
      type: Object,
    },
  },
})
</script>
