<template>
  <div
    class="flex min-h-screen w-screen flex-col overflow-x-hidden bg-slate-2 antialiased dark:bg-slate-dark-1/50"
  >
    <AppHeader />
    <NuxtPage class="grow" />
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '#imports'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Zellmer.dev` : 'Zellmer.dev'
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Lennart here. Sharing thoughts and concepts around Product, Design and Development.',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'Product, Blog, Design, Development, Maker',
    },
    { name: 'og:title', content: `Zellmer.dev` },
    {
      name: 'og:description',
      content: `Lennart here. Sharing thoughts and concepts around Product, Design and Development.`,
    },
    { name: 'og:image', content: '/og-image.jpeg' },
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
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;300;400;500;600;700;800&display=swap',
    },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  ],
  bodyAttrs: {
    class: 'bg-black',
  },
})
</script>
