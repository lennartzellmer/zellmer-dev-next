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
import { computed, useHead, useColorMode } from '#imports'

useHead({
  title: computed(() => `Blog - Zellmer.dev`),
  meta: [
    {
      name: 'description',
      content:
        'Lennart here. Sharing thoughts and concepts around Product, Design and Development',
    },
    {
      name: 'theme-color',
      content: '#121314',
      media: '(prefers-color-scheme: dark)',
      key: 'theme-1',
    },
    {
      name: 'theme-color',
      content: '#e8eaec',
      media: '(prefers-color-scheme: light)',
      key: 'theme-2',
    },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=JetBrains+Mono:wght@200;300;400;500;600;700;800&display=swap',
    },
  ],
  bodyAttrs: {
    class: 'bg-black',
  },
})
</script>
