<script lang="ts" setup>
import { ImageField } from '@prismicio/types'
import { useFetch } from '#app'
import AppBlurHash from '~/components/AppBlurHash.vue'
import { ref } from '#imports'

const props = defineProps<{
  selectedImage: ImageField
}>()

const { data: blurHash } = await useFetch<string>(
  props.selectedImage.url.split('?')[0] + '?fm=blurhash'
)

const showBlurHash = ref(true)

const onLoaded = () => {
  showBlurHash.value = false
}
</script>

<template>
  <div
    class="gallery__image_container relative z-[998] flex h-full w-full max-w-full overflow-x-hidden bg-black sm:rounded-lg md:max-w-7xl"
    @click.stop="$emit('click')"
  >
    <AppBlurHash
      v-if="blurHash && showBlurHash"
      :width="selectedImage.dimensions.width"
      :height="selectedImage.dimensions.height"
      :hash="blurHash"
      class="block"
    />
    <PrismicImage
      class="gallery__nuxt_picture flex h-auto w-full"
      :imgix-params="{ w: 2000 }"
      :field="selectedImage"
      @click.stop="$emit('click')"
      @load="onLoaded()"
    />
  </div>
</template>
