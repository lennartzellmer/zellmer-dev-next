<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { type Content } from '@prismicio/client'
import { asText } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CodeSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

<template>
  <Shiki
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    lang="js"
    :code="asText(slice.primary.code)"
    as="code"
    class="my-6 block"
  />
</template>

<style lang="scss">
.shiki {
  white-space: pre-wrap;
  @apply p-8 rounded-lg shadow-md ring-4 ring-slate-3;
}
</style>
