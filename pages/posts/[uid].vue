<template>
  <div>
    <main class="bg-slate-2 dark:bg-transparent">
      <section
        class="mx-auto w-full max-w-5xl gap-8 px-4 pb-12 md:grid md:auto-rows-max md:grid-cols-12 md:px-6"
      >
        <div
          v-if="pending"
          class="col-span-12 pt-16 md:col-span-10 lg:col-span-10"
        >
          <AppSkeleton :max-width="100" class="text-4xl sm:text-6xl" />
          <AppSkeleton :max-width="75" class="mt-4 text-4xl sm:text-6xl" />
          <div v-for="index in blocks" :key="index" class="mt-8 text-lg">
            <AppSkeleton v-for="n in index" :key="`${{ n }}-${{ index }}`" />
          </div>
        </div>
        <template v-if="post">
          <h1
            class="col-span-12 pt-16 text-4xl font-bold leading-tight text-black dark:text-slate-dark-12 sm:text-6xl md:col-span-10 lg:col-span-8"
          >
            {{ asText(post.data.headline) }}
          </h1>
          <SlicesBlock
            class="col-span-12 md:col-span-10 lg:col-span-8"
            :slices="post.data.body"
          />
        </template>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { usePrismic, useRoute, useAsyncData, computed, useHead } from '#imports'
import AppSkeleton from '~/components/AppSkeleton.vue'
import { MetaTagKeys } from '~/types/metaTagKeys'
const { client, asText } = usePrismic()
const route = useRoute()

const { data: post, pending } = useAsyncData(route.params.uid.toString(), () =>
  client.getByUID('blog-post', route.params.uid.toString(), { lang: 'en-eu' })
)

useHead({
  title: computed(() => `${asText(post.value?.data.headline) || ''}`),
  meta: [
    {
      hid: MetaTagKeys.DESCRIPTION,
      name: MetaTagKeys.DESCRIPTION,
      content: computed(() => `${asText(post.value?.data.description) || ''}`),
    },
    {
      hid: MetaTagKeys.OG_TYPE,
      property: MetaTagKeys.OG_TYPE,
      content: 'article',
    },
  ],
})

const blocks = computed(() => {
  return [4, 5, 2, 6, 7]
})
</script>

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
