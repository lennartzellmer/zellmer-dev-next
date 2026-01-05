<script lang="ts" setup>
import { MetaTagKeys } from './types/metaTagKeys'

useHead({
  titleTemplate: (titleChunk: unknown) => {
    return titleChunk ? `${titleChunk} - Zellmer.dev` : 'Zellmer.dev'
  },
  meta: [
    {
      name: MetaTagKeys.DESCRIPTION,
      content: 'Lennart here. Sharing thoughts and concepts around Product, Design and Development.',
    },
    {
      name: MetaTagKeys.KEYWORDS,
      content: 'Product, Blog, Design, Development, Maker',
    },
    {
      property: MetaTagKeys.OG_TITLE,
      content: 'Zellmer.dev',
    },
    {
      property: MetaTagKeys.OG_DESCRIPTION,
      content: 'Lennart here. Sharing thoughts and concepts around Product, Design and Development.',
    },
    {
      property: MetaTagKeys.OG_LOCALE,
      content: 'de-de',
    },
    {
      property: MetaTagKeys.OG_TYPE,
      content: 'website',
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
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  ],
  bodyAttrs: {
    class: 'bg-black overflow-x-hidden',
  },
  htmlAttrs: {
    lang: 'en',
  },
})

defineOgImageComponent('DefaultPage', {
  title: 'Zellmer.dev',
  description: 'Lennart here. Sharing thoughts and concepts around Product, Design and Development.',
})
</script>

<template>
  <div class="flex min-h-screen w-screen flex-col overflow-x-hidden bg-slate-2 antialiased dark:bg-slate-dark-1/50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
