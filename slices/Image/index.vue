<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.ImageSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)

const index = ref<null | number>(null)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="grid grid-cols-2 gap-4 py-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
  >
    <button
      v-for="(item, i) in slice.items"
      :key="i"
      class="col-span-1 overflow-hidden rounded-lg ring-slate-7 transition hover:ring-2 focus:outline-none focus:ring dark:ring-slate-dark-7"
      @click="index = i"
    >
      <NuxtImg
        :src="item.image.url!"
        width="200"
        height="200"
        fit="crop"
        :modifiers="{ h: 400, w: 400 }"
      />
    </button>
    <client-only>
      <AppGallery
        :images="props.slice.items.map((item) => item.image)"
        :index="index"
        @close="index = null"
      />
    </client-only>
  </section>
</template>
