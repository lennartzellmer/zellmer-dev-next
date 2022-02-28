<template>
  <div>
    <main class="bg-slate-2">
      <section
        class="gap-8 px-4 pb-12 mx-auto w-full max-w-6xl md:grid md:grid-cols-12 md:auto-rows-max md:px-6"
      >
        <div
          v-if="pending"
          class="col-span-12 md:col-span-10 lg:col-span-8 pt-16"
        >
          <AppSkeleton max-width="100" class="text-4xl sm:text-6xl" />
          <AppSkeleton max-width="75" class="mt-4 text-4xl sm:text-6xl" />
          <div v-for="index in blocks" class="mt-8 text-lg">
            <template v-for="n in index">
              <AppSkeleton />
            </template>
          </div>
        </div>
        <template v-if="post">
          <h1
            class="col-span-12 pt-16 text-4xl font-bold leading-tight sm:text-6xl md:col-span-10 lg:col-span-8"
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
import { asText } from '@prismicio/helpers'
import { useMeta } from '#meta'
import { usePrismic, useRoute, useAsyncData, computed } from '#imports'
import AppSkeleton from '~/components/AppSkeleton.vue'
const { client } = usePrismic()
const route = useRoute()

const { data: post, pending } = useAsyncData(route.params.uid.toString(), () =>
  client.getByUID('blog-post', route.params.uid.toString())
)

useMeta(() => {
  return { title: `${asText(post.value?.data?.headline || '')} - Zellmer.dev` }
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
