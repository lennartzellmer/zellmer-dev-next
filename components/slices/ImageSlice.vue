<template>
  <div
    class="grid grid-cols-2 gap-4 py-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
  >
    <button
      v-for="(item, i) in slice.items"
      :key="i"
      class="col-span-1 overflow-hidden rounded-lg ring-slate-7 transition hover:ring-2 focus:outline-none focus:ring"
      @click="index = i"
    >
      <PrismicImage
        :field="item.image"
        :imgix-params="{ h: 400, w: 400, fit: 'crop' }"
      />
    </button>
    <client-only placeholder="Loading...">
      <AppGallery
        v-if="index !== null"
        :images="images"
        :index="index"
        @close="index = null"
      />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { Slice } from '@prismicio/types'
import { computed, ref } from '#imports'

const props = defineProps<{
  slice: Slice<any>
}>()

const index = ref(null)

const images = computed(() => {
  const images: string[] = []
  props.slice.items.forEach((item: any) => {
    images.push(item.image)
  })
  return images
})
</script>
