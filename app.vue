<template>
  <div
    class="flex flex-col min-h-screen bg-slate-2 dark:bg-slate-dark-1/50 antialiased w-screen overflow-x-hidden"
  >
    <AppHeader />
    <NuxtPage class="grow" />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { computed, useHead } from '#imports'

useHead({
  title: computed(() => `Blog - Zellmer.dev`),
  meta: [
    {
      name: 'description',
      content:
        'Lennart here. Sharing thoughts and concepts around Product, Design and Development',
    },
  ],
  bodyAttrs: {
    class: 'bg-black',
  },
})
</script>
