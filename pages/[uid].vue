<template>
  <main class="bg-slate-2">
    <section
      v-if="page"
      class="grid-cols-12 gap-8 px-4 pt-12 mx-auto max-w-6xl sm:grid sm:px-6 lg:px-8"
    >
      <article class="col-span-7 pb-12 prismic-text">
        <PrismicRichText class="my-8" :field="page.data.title" />
        <PrismicRichText class="my-8" :field="page.data.text" />
      </article>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useAsyncData, useRoute, usePrismic, useHead, computed } from '#imports'

const { client, asText } = usePrismic()
const route = useRoute()

const { data: page } = useAsyncData(route.params.uid.toString(), () =>
  client.getByUID('default_page', route.params.uid.toString())
)

useHead({
  title: computed(
    () => `${asText(page.value?.data.title) || ''} - Zellmer.dev`
  ),
})
</script>

<style lang="scss">
.prismic-text {
  h1 {
    @apply text-slate-12 font-bold text-5xl mb-3 mt-12;
  }
  h3 {
    @apply text-slate-12 font-semibold text-2xl mb-3 mt-12;
  }
  p {
    @apply text-slate-11 leading-relaxed;
  }
  a {
    @apply text-slate-8 underline hover:text-slate-5 leading-relaxed font-mono;
  }
}
</style>
