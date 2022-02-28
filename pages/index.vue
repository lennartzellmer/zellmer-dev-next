<template>
  <main>
    <section class="px-4 pt-12 lg:px-8">
      <ul v-if="posts" class="mx-auto space-y-12 max-w-5xl">
        <li v-for="post in posts.results" :key="post.id">
          <AppArticlePreview :post="post" />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { usePrismic } from '@prismicio/vue'
import { useMeta } from '#meta'
import { useAsyncData } from '#imports'

const { client } = usePrismic()
const { data: posts } = useAsyncData('blog-posts', () =>
  client.getByType('blog-post', {
    orderings: [
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })
)

useMeta({ title: 'Blog - Zellmer.dev' })
</script>
