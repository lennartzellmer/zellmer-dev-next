<script lang="ts" setup>
import { ImageField } from '@prismicio/types'
import { useFetch } from '#app'
import AppBlurHash from '~/components/AppBlurHash.vue'
import { ref } from '#imports'

interface Props {
  selectedImage: ImageField
}

const props = defineProps<Props>()

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
    class="flex relative overflow-x-hidden z-[998] w-full max-w-full h-full bg-black sm:rounded-lg md:max-w-7xl gallery__image_container"
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
      class="flex w-full h-auto gallery__nuxt_picture"
      :imgix-params="{ w: 2000 }"
      :field="selectedImage"
      @click.stop="$emit('click')"
      @load="onLoaded()"
    />
  </div>
</template>