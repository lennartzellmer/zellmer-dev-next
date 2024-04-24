<script lang="ts" setup>
import { MetaTagKeys } from '~/types/metaTagKeys'

const settings = useSettings()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Zellmer.dev` : 'Zellmer.dev'
  },
  meta: [
    {
      hid: MetaTagKeys.DESCRIPTION,
      name: MetaTagKeys.DESCRIPTION,
      content: computed(() => settings.value?.data.description),
    },
    {
      hid: MetaTagKeys.KEYWORDS,
      name: MetaTagKeys.KEYWORDS,
      content: computed(() => settings.value?.data.keywords.map(keyword => keyword.keyword).join(', ')),
    },
    {
      hid: MetaTagKeys.OG_TITLE,
      property: MetaTagKeys.OG_TITLE,
      content: computed(() => settings.value?.data.name),
    },
    {
      hid: MetaTagKeys.OG_DESCRIPTION,
      property: MetaTagKeys.OG_DESCRIPTION,
      content: computed(() => settings.value?.data.description),
    },
    {
      hid: MetaTagKeys.OG_LOCALE,
      property: MetaTagKeys.OG_LOCALE,
      content: computed(() => settings.value?.lang),
    },
    {
      hid: MetaTagKeys.OG_TYPE,
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
  title: computed(() => settings.value?.data.name),
  description: computed(() => settings.value?.data.description),
})
</script>

<template>
  <div
    class="flex min-h-screen w-screen flex-col overflow-x-hidden bg-slate-2 antialiased dark:bg-slate-dark-1/50"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
