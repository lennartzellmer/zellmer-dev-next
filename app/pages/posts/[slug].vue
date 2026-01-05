<script lang="ts" setup>
import { MetaTagKeys } from '~/types/metaTagKeys'

const { slug } = useRoute().params

const { data: post, status } = await useAsyncData(slug!.toString(), () => queryCollection('posts')
  .where('slug', '=', slug)
  .first())

useHead({
  title: computed(() => post.value!.seo_title || post.value!.title),
  meta: [
    {
      name: MetaTagKeys.DESCRIPTION,
      content: computed(() => post.value!.seo_description || post.value!.description),
    },
    {
      property: MetaTagKeys.OG_TYPE,
      content: 'article',
    },
    {
      property: MetaTagKeys.OG_DESCRIPTION,
      content: computed(() => post.value!.seo_description || post.value!.description),
    },
  ],
})

defineOgImageComponent('DefaultPage', {
  title: computed(() => post.value!.seo_title || post.value!.title),
  description: computed(() => post.value!.seo_description || post.value!.description),
})

const blocks = computed(() => {
  return [4, 5, 2, 6, 7]
})
</script>

<template>
  <div>
    <main class="bg-slate-2 dark:bg-transparent">
      <section class="mx-auto w-full max-w-5xl gap-8 px-4 pb-12 md:grid md:auto-rows-max md:grid-cols-12 md:px-6">
        <div
          v-if="status === 'pending'"
          class="col-span-12 pt-16 md:col-span-10 lg:col-span-10"
        >
          <AppSkeleton
            :max-width="100"
            class="text-4xl sm:text-6xl"
          />
          <AppSkeleton
            :max-width="75"
            class="mt-4 text-4xl sm:text-6xl"
          />
          <div
            v-for="index in blocks"
            :key="index"
            class="mt-8 text-lg"
          >
            <AppSkeleton
              v-for="n in index"
              :key="`${{ n }}-${{ index }}`"
            />
          </div>
        </div>
        <template v-if="post">
          <h1 class="col-span-12 pt-16 text-4xl font-bold leading-tight text-black dark:text-slate-dark-12 sm:text-6xl md:col-span-10 lg:col-span-8">
            {{ post.title }}
          </h1>
          <ContentRenderer
            class="col-span-12
            md:col-span-10
            lg:col-span-8
            prose
            dark:prose-invert
            dark:prose-pre:bg-gray-dark-3
            dark:prose-pre:text-gray-dark-12
            prose-pre:bg-gray-3
            prose-pre:text-gray-12
            dark:prose-code:bg-gray-dark-3
            prose-code:bg-gray-3"
            :value="post"
          />
        </template>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.BlogPost__picture {
  width: 100%;
  height: 100%;
  display: flex;
  img {
    object-fit: cover;
    height: auto;
    width: 100%;
  }
}
</style>
