<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Content } from '@prismicio/client'
import { asText } from '@prismicio/client'
import AppCopyButton from '~/components/AppCopyButton.vue'

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
  <div class="relative">
    <AppCopyButton
      class="absolute top-2 right-2"
      :text-to-copy="asText(slice.primary.code)"
    />
    <Shiki
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      lang="js"
      :code="asText(slice.primary.code)"
      as="code"
      class="my-6 block"
    />
  </div>
</template>
