<template>
  <div>
    <main class="bg-slate-2">
      <section
        class="gap-8 px-4 pb-12 mx-auto w-full max-w-6xl md:grid md:grid-cols-12 md:auto-rows-max md:px-6"
      >
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
import { usePrismic, useRoute, useAsyncData } from '#imports'
const { client } = usePrismic()
const route = useRoute()

const { data: post } = useAsyncData(route.params.uid.toString(), () =>
  client.getByUID('blog-post', route.params.uid.toString())
)

useMeta(() => {
  return { title: `${asText(post.value?.data?.headline || '')} - Zellmer.dev` }
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
