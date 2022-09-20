<template>
  <main>
    <section class="mx-auto mt-20 max-w-5xl px-4 md:mt-28">
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
          class="relative flex aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <nuxt-picture
            fit="crop"
            alt="Portrait Lennart"
            loading="lazy"
            :src="intro.data.gallery[0].image_1.url"
            height="330"
            width="300"
            class="AppArticlePreview__picture"
            sizes="xs:150px sm:180px md:230px lg:600 xl:800"
          />
        </div>
        <div
          class="relative flex aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <nuxt-picture
            fit="crop"
            loading="lazy"
            alt="Portrait Lennart"
            :src="intro.data.gallery[0].image_2.url"
            height="330"
            width="300"
            class="AppArticlePreview__picture"
            sizes="xs:150px sm:180px md:230px lg:600 xl:800"
          />
        </div>
        <div
          class="relative flex aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <nuxt-picture
            fit="crop"
            loading="lazy"
            :src="intro.data.gallery[0].image_3.url"
            height="330"
            alt="Portrait Lennart"
            width="300"
            class="AppArticlePreview__picture"
            sizes="xs:150px sm:180px md:230px lg:600 xl:800"
          />
        </div>
        <div
          class="relative flex aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <nuxt-picture
            fit="crop"
            loading="lazy"
            alt="Portrait Lennart"
            :src="intro.data.gallery[0].image_4.url"
            height="330"
            width="300"
            class="AppArticlePreview__picture"
            sizes="xs:150px sm:180px md:230px lg:600 xl:800"
          />
        </div>
        <div
          class="relative flex aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <nuxt-picture
            fit="crop"
            loading="lazy"
            alt="Portrait Lennart"
            :src="intro.data.gallery[0].image_5.url"
            height="330"
            width="300"
            class="AppArticlePreview__picture"
            sizes="xs:150px sm:180px md:230px lg:600 xl:800"
          />
        </div>
      </div>
    </section>
    <section class="mx-auto mt-4 max-w-5xl px-4 sm:mt-8 md:mt-28">
      <ul v-if="posts" class="">
        <li
          v-for="post in posts.results.slice(0, 3)"
          :key="post.id"
          class="border-b border-slate-4 last:border-0 dark:border-slate-dark-2"
        >
          <AppArticlePreview :post="post" />
        </li>
        <li>
          <NuxtLink
            class="group flex cursor-pointer flex-row items-center py-8 focus:outline-none"
            :to="'/articles'"
          >
            <div
              v-for="post in posts.results.slice(3, posts.results.length)"
              :key="post.id"
              class="relative z-20 -mr-6 flex h-auto w-12 shrink-0 overflow-hidden rounded-xl bg-slate-6 shadow-md ring ring-slate-1 transition-all dark:bg-slate-dark-6 dark:ring-slate-dark-4 sm:-mr-8 sm:w-16 sm:group-hover:-mr-7"
            >
              <PrismicImage
                :imgix-params="{ fit: 'crop', h: 64, w: 64 }"
                :pixel-densities="[1, 2]"
                :field="post.data.thumbnail"
                class="AppArticlePreview__picture"
                height="64"
                width="64"
              />
            </div>
            <span
              class="ml-8 flex items-center space-x-1 rounded-lg px-3 py-3 text-green-500 group-hover:bg-slate-3 dark:group-hover:bg-slate-dark-1 sm:ml-12 sm:px-4"
            >
              <p>See more articles</p>
              <PhCaretRight class="h-auto w-4" />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import PhCaretRight from 'virtual:icons/ph/caret-right-bold'
import { useAsyncData, useHead, usePrismic } from '#imports'
import AppArticlePreview from '~/components/AppArticlePreview.vue'
import AppSocialLinks from '~/components/AppSocialLinks.vue'

useHead({
  title: 'Intro',
})

const { client } = usePrismic()
const { data: posts } = useAsyncData('blog-posts-preview', () =>
  client.getByType('blog-post', {
    lang: 'en-eu',
    pageSize: 6,
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
