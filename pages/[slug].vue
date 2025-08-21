<script lang="ts" setup>
import type { Post } from '~/types/content'

const { slug } = useRoute().params
const { data: page, error } = await useAsyncData(slug.toString(), () => queryContent<Post>('posts').where({ slug }).findOne())

if (error) {
  console.error('Error fetching page:', error)
  throw createError({ statusCode: 404, statusMessage: 'Meh, this page might used to exists... but now it is gone. Nothing is forever.' })
}

useHead({
  title: computed(() => `${page.value?.title || ''}`),
})
</script>

<template>
  <main class="bg-slate-2 dark:bg-transparent">
    <section
      v-if="page"
      class="mx-auto max-w-5xl grid-cols-12 gap-8 px-4 pt-12 sm:grid sm:px-6 lg:px-4"
    >
      <ContentRendererMarkdown
        :value="page"
        class="prose dark:prose-invert prismic-text col-span-7 pb-12"
      />
    </section>
  </main>
</template>

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
    @apply font-mono leading-relaxed text-slate-10 underline hover:text-slate-11 dark:hover:text-slate-dark-11 dark:text-slate-dark-10;
  }
}
</style>
