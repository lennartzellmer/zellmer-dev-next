<template>
  <NuxtErrorBoundary>
    <main class="bg-slate-2 dark:bg-transparent">
      <section v-if="page" class="mx-auto max-w-5xl grid-cols-12 gap-8 px-4 pt-12 sm:grid sm:px-6 lg:px-4">
        <article class="prismic-text col-span-7 pb-12">
          <PrismicRichText class="my-8" :field="page.data.title" />
          <PrismicRichText class="my-8" :field="page.data.text" />
        </article>
      </section>
    </main>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
import { useAsyncData, useRoute, usePrismic, useHead, computed } from '#imports'

const { client, asText } = usePrismic()
const route = useRoute()

const { data: page } = await useAsyncData(route.params.uid.toString(), () =>
  client.getByUID('default_page', route.params.uid.toString(), {
    lang: 'en-eu'
  })
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

useHead({
  title: computed(() => `${asText(page.value?.data.title) || ''}`)
})

</script>

<style lang="scss">
.prismic-text {
  h1 {
    @apply mb-3 mt-12 text-5xl font-bold text-slate-12 dark:text-slate-dark-12;
  }

  h3 {
    @apply mb-3 mt-12 text-2xl font-semibold text-slate-12 dark:text-slate-dark-12;
  }

  p {
    @apply leading-relaxed text-slate-11 dark:text-slate-dark-11;
  }

  a {
    @apply font-mono leading-relaxed text-slate-8 underline hover:text-slate-5 dark:text-slate-dark-8;
  }
}
</style>
