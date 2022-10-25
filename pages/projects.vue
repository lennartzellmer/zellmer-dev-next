<template>
  <section class="mx-auto mt-16 w-full max-w-5xl px-4 sm:mt-32 lg:px-0">
    <header class="max-w-2xl">
      <h1
        class="text-4xl font-bold tracking-tight text-slate-12 dark:text-slate-dark-12 sm:text-5xl"
      >
        Here are some things I am quite proud of
      </h1>
      <p class="mt-6 text-base text-slate-11 dark:text-slate-dark-11">
        I've worked on tons of little projects over the years but these are the
        ones that I'm most proud of.
      </p>
    </header>
    <div class="mt-16 mb-28 sm:mt-20">
      <ul
        class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AppProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.data.title"
          :description="project.data.description"
          :href="project.data.link.url"
          :readable-url="project.data.readable_url"
        />
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import AppProjectCard from '~/components/AppProjectCard.vue'
import { useAsyncData, useHead, usePrismic } from '#imports'

useHead({
  title: 'Projects',
})

const { client } = usePrismic()

const { data: projects } = useAsyncData('projects', () =>
  client.getAllByType('project', { lang: 'en-eu' })
)
</script>
