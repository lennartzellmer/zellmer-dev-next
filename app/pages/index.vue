<script setup lang="ts">
useHead({
  title: 'Hi, Lennart here!',
  meta: [
    {
      name: 'description',
      content: 'Sharing thoughts and concepts around Product, Design and Development.',
    },
  ],
})

defineOgImageComponent('DefaultPage', {
  title: 'Hi, Lennart here!',
  description: 'Sharing thoughts and concepts around Product, Design and Development.',
})
</script>

<template>
  <main>
    <HomeHeader />
    <LatestBlogPosts />
  </main>
</template>
