<template>
  <div
    class="flex flex-col min-h-screen bg-slate-2 antialiased w-screen overflow-x-hidden"
  >
    <AppHeader class="bg-slate-2" />
    <NuxtPage class="grow" />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { useHead, useRoute } from '#imports'

const route = useRoute()

useHead({
  title: `${route.meta.title} - Zellmer.dev`,
  meta: [
    {
      name: 'description',
      content:
        'Lennart here. Sharing thoughts and concepts around Product, Design and Development',
    },
  ],
})
</script>
