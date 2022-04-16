<template>
  <div>
    <prismic-rich-text
      class="mt-8 break-words prose-a:text-black dark:prose-a:text-white prose-a:font-mono prismic-rich-text"
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

<style lang="scss">
.prismic-rich-text {
  img {
    @apply rounded-lg overflow-hidden;
  }
}
</style>
