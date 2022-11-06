<template>
  <section class="mx-auto mt-16 max-w-5xl px-4 sm:mt-32 lg:px-0">
    <header class="max-w-2xl">
      <h1
        class="text-4xl font-bold tracking-tight text-slate-12 dark:text-slate-dark-12 sm:text-5xl"
      >
        Sharing thoughts and concepts around Product, Design and Development.
      </h1>
      <p class="mt-6 text-base text-slate-11 dark:text-slate-dark-11">
        Some of my long-form thoughts on programming, leadership, product
        design, and more, collected in chronological order.
      </p>
    </header>
    <ul v-if="posts" class="mt-8">
      <li
        v-for="post in posts.results"
        :key="post.id"
        class="border-b border-slate-4 last:border-0 dark:border-slate-dark-2"
      >
        <AppArticlePreview :post="post" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { useAsyncData, useHead, usePrismic } from '#imports'

useHead({
  title: 'Articles'
})

const { client } = usePrismic()
const { data: posts } = useAsyncData('blog-posts', () =>
  client.getByType('blog-post', {
    lang: 'en-eu',
    orderings: [
      { field: 'document.first_publication_date', direction: 'desc' }
    ]
  })
)
</script>
