<template>
  <main>
    <section class="mx-auto mt-20 max-w-5xl px-4 md:mt-28 lg:px-0">
      <div class="flex max-w-2xl flex-col">
        <prismic-rich-text
          class="text-3xl font-bold leading-tight text-slate-12 dark:text-slate-dark-12 md:text-5xl"
          :field="intro.data.headline"
        />
        <prismic-rich-text
          class="mt-6 leading-7 text-slate-11 dark:text-slate-dark-11"
          :field="intro.data.description"
        />
        <AppSocialLinks class="mt-4" />
      </div>
    </section>
    <section class="mt-16 sm:mt-24">
      <div
        class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
      >
        <div
          class="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <PrismicImage
            :imgix-params="{ fit: 'crop', h: 660, w: 600 }"
            :pixel-densities="[1, 2]"
            :field="intro.data.gallery[0].image_1"
            class="AppArticlePreview__picture"
          />
        </div>
        <div
          class="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <PrismicImage
            :imgix-params="{ fit: 'crop', h: 660, w: 600 }"
            :pixel-densities="[1, 2]"
            :field="intro.data.gallery[0].image_2"
            class="AppArticlePreview__picture"
          />
        </div>
        <div
          class="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <PrismicImage
            :imgix-params="{ fit: 'crop', h: 660, w: 600 }"
            :pixel-densities="[1, 2]"
            :field="intro.data.gallery[0].image_3"
            class="AppArticlePreview__picture"
          />
        </div>
        <div
          class="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <PrismicImage
            :imgix-params="{ fit: 'crop', h: 660, w: 600 }"
            :pixel-densities="[1, 2]"
            :field="intro.data.gallery[0].image_4"
            class="AppArticlePreview__picture"
          />
        </div>
        <div
          class="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <PrismicImage
            :imgix-params="{ fit: 'crop', h: 660, w: 600 }"
            :pixel-densities="[1, 2]"
            :field="intro.data.gallery[0].image_5"
            class="AppArticlePreview__picture"
          />
        </div>
      </div>
    </section>
    <section class="mx-auto mt-28 max-w-5xl px-4 lg:px-0">
      <ul v-if="posts" class="">
        <li
          class="border-b border-slate-4 last:border-0 dark:border-slate-dark-2"
          v-for="post in posts.results"
          :key="post.id"
        >
          <AppArticlePreview :post="post" />
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useAsyncData, usePrismic } from '#imports'
import AppArticlePreview from '~/components/AppArticlePreview.vue'
import AppSocialLinks from '~/components/AppSocialLinks.vue'

const { client } = usePrismic()
const { data: posts } = useAsyncData('blog-posts', () =>
  client.getByType('blog-post', {
    lang: 'en-eu',
    orderings: [
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  })
)
const { data: intro } = useAsyncData('intro', () =>
  client.getSingle('homepage_intro', {
    lang: 'en-eu',
  })
)
</script>
