<script lang="ts" setup>
import AppBlurHash from '~/components/AppBlurHash.vue'
import { ref } from '#imports'

const props = defineProps<{
  src: string
  alt: string
  width: number
  height: number
  blurHash: string
}>()

const showBlurHash = ref(true)

const onLoaded = () => {
  showBlurHash.value = false
}
</script>

<template>
  <div
    class="relative flex aspect-[5/3] overflow-x-hidden bg-slate-4 dark:bg-slate-dark-1 sm:rounded-lg md:max-w-7xl"
  >
    <AppBlurHash
      v-if="showBlurHash"
      :width="width"
      :height="height"
      :hash="blurHash"
    />
    <NuxtImg
      class="gallery__nuxt_picture flex h-auto w-full"
      :src="src"
      :width="width"
      :height="height"
      sizes="xs:320 sm:640 md:768 lg:1024 xl:2048"
      fit="crop"
      :alt="alt"
      @load="onLoaded()"
    />
  </div>
</template>
