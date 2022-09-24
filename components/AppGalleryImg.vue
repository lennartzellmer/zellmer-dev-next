<script lang="ts" setup>
import { ImageField } from '@prismicio/types'
import AppBlurHash from '~/components/AppBlurHash.vue'
import { ref } from '#imports'

const props = defineProps<{
  selectedImage: ImageField
  blurHash: string
}>()

const showBlurHash = ref(true)

const onLoaded = () => {
  showBlurHash.value = false
}
</script>

<template>
  <div
    class="gallery__image_container relative flex aspect-[2/1] overflow-x-hidden bg-slate-4 dark:bg-slate-dark-1 sm:rounded-lg md:max-w-7xl"
    @click.stop="$emit('click')"
  >
    <AppBlurHash
      v-if="blurHash && showBlurHash"
      :width="2000"
      :height="1000"
      :hash="blurHash"
    />
    <PrismicImage
      class="gallery__nuxt_picture flex h-auto w-full"
      :imgix-params="{ w: 2000, h: 1000, fit: 'crop' }"
      :field="selectedImage"
      @click.stop="$emit('click')"
      @load="onLoaded()"
    />
  </div>
</template>
