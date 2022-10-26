<template>
  <div
    class="grid grid-cols-2 gap-4 py-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
  >
    <button
      v-for="(item, i) in slice.items"
      :key="i"
      class="col-span-1 overflow-hidden rounded-lg ring-slate-7 transition hover:ring-2 focus:outline-none focus:ring dark:ring-slate-dark-7"
      @click="index = i"
    >
      <NuxtImg
        :src="item.image.url"
        width="200"
        height="200"
        fit="crop"
        :modifiers="{ h: 400, w: 400 }"
      />
    </button>
    <client-only>
      <AppGallery :images="images" :index="index" @close="index = null" />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import { ImageField, Slice } from '@prismicio/types'
import { computed, ref } from '#imports'

const props = defineProps<{
  slice: Slice<any, any, any>
}>()

const index = ref<null | number>(null)

const images = computed(() => {
  const images: ImageField[] = []
  props.slice.items.forEach((item: any) => {
    images.push(item.image)
  })
  return images
})
</script>
