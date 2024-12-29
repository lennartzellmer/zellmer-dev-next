<script setup lang="ts">
const prismic = usePrismic()
const { data: page } = useAsyncData('home', () =>
  prismic.client.getSingle('home'),
)

useHead({
  title: page.value?.data.meta_title,
  meta: [
    {
      name: 'description',
      content: page.value?.data.meta_description,
    },
  ],
})

defineOgImageComponent('DefaultPage', {
  title: computed(() => page.value?.data.meta_title),
  description: computed(() => page.value?.data.meta_description),
})
</script>

<template>
  <main>
    <HomeHeader />
    <LatestBlogPosts />
  </main>
</template>
