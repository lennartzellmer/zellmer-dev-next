<template>
  <footer class="mx-auto flex w-full max-w-5xl px-4 lg:px-0">
    <nav
      v-if="footerNavigation"
      class="w-full border-t border-slate-5 py-12 dark:border-slate-dark-5"
    >
      <PrismicLink
        v-for="(linkObject, id) in footerNavigation.data.menu_links"
        :key="id"
        class="p-3 text-sm text-slate-11 transition hover:text-slate-12 dark:text-slate-dark-11 dark:hover:text-slate-dark-12"
        :field="linkObject.link"
      >
        {{ asText(linkObject.label) }}
      </PrismicLink>
    </nav>
  </footer>
</template>

<script lang="ts" setup>
import { useAsyncData, usePrismic } from '#imports'

const { client, asText } = usePrismic()
const { data: footerNavigation } = useAsyncData('footerNavigation', () =>
  client.getSingle('footer_navigation', { lang: 'en-eu' })
)
</script>

<style lang="scss">
.prismic-text-dark {
  h3 {
    @apply mb-3 text-5xl font-bold text-slate-12 dark:text-slate-dark-12;
  }
  p {
    @apply pt-6 text-base leading-relaxed text-slate-11 dark:text-slate-dark-11;
  }
  a {
    @apply font-mono leading-relaxed text-slate-12 hover:text-slate-11 dark:text-slate-dark-11 dark:hover:text-slate-dark-10;
  }
}
</style>
