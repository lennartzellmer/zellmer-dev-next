<template>
  <div>
    <prismic-rich-text
      class="prismic-rich-text mt-8 break-words prose-a:font-mono prose-a:text-black dark:prose-a:text-white"
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
    @apply overflow-hidden rounded-lg;
  }
}
</style>
