<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.TextSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

<template>
  <section
    class="w-full"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <prismic-rich-text
      class="prismic-rich-text prose dark:prose-invert mt-8 break-words prose-a:font-mono prose-a:text-black dark:prose-a:text-white"
      :field="slice.primary.text"
    />
  </section>
</template>

<style lang="scss">
.prismic-rich-text {
  img {
    @apply overflow-hidden rounded-lg;
  }
}
</style>
