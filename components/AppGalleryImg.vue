<script lang="ts" setup>
import PhDownloadSimple from 'virtual:icons/ph/download-simple'
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
    <NuxtLink
      :href="src"
      target="_blank"
      class="absolute right-0 bottom-0 m-4 hidden rounded-md border border-slate-1/20 bg-slate-12/50 p-3 text-slate-1/70 hover:border-slate-1/40 hover:text-slate-1/70 sm:flex"
      ><PhDownloadSimple />
      <span class="sr-only">Download</span>
    </NuxtLink>
    <AppBlurHash
      v-if="showBlurHash"
      :width="width"
      :height="height"
      :hash="blurHash"
    />
    <NuxtImg
      class="flex h-auto w-full object-contain"
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
