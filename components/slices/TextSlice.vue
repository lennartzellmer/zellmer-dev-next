<template>
  <div>
    <prismic-rich-text
      class="mt-8 break-words prose-a:text-black dark:prose-a:text-white prose-a:font-mono prose-a:hover:text-green-500"
      :field="slice.primary.text"
    />
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
