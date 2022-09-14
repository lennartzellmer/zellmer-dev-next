<template>
  <header class="px-4">
    <nav
      class="mx-auto mt-3 flex max-w-5xl flex-row items-center justify-between py-4 sm:mt-8"
    >
      <ul
        class="mr-auto flex items-center space-x-0 rounded-full text-sm font-medium sm:ml-3 sm:text-base"
      >
        <li>
          <NuxtLink
            v-slot="{ isActive }"
            class="group focus:outline-none"
            to="/"
            @click="animate"
          >
            <svg
              id="morphing"
              width="100"
              height="100"
              fill="none"
              viewBox="0 0 100 100"
              class="h-auto w-10 overflow-visible text-slate-12 transition group-hover:text-green-500 dark:text-slate-dark-12 dark:group-hover:text-green-500 sm:w-14"
              :class="[
                isActive
                  ? 'text-green-500'
                  : 'text-slate-12 dark:text-slate-dark-12',
              ]"
            >
              <path
                id="morphing-path"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
                :d="svgPath.path"
              />
            </svg>
          </NuxtLink>
        </li>
        <li v-for="menuItem in menuItems" :key="menuItem.path">
          <NuxtLink
            :to="menuItem.path"
            class="ml-1 rounded-md py-3 px-1.5 text-slate-12 hover:bg-slate-3 dark:text-slate-dark-12 dark:hover:bg-slate-dark-3 sm:ml-3 sm:px-3"
            >{{ menuItem.name }}</NuxtLink
          >
        </li>
      </ul>
      <div class="flex items-center justify-center">
        <AppDarkModeToggle class="ml-3" />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import blobshape from 'blobshape'
import AppDarkModeToggle from '~/components/AppDarkModeToggle.vue'
import { useNuxtApp } from '#imports'

const { $anime } = useNuxtApp()

const svgPath = blobshape({
  size: 100,
  growth: 5,
  edges: 10,
  seed: null,
})

const animate = () => {
  const newSvgPath = blobshape({
    size: 100,
    growth: 5,
    edges: 10,
    seed: null,
  })
  $anime({
    targets: '#morphing-path',
    d: [{ value: newSvgPath.path }],
    easing: 'spring(1, 80, 15, 20)',
  })
}

const menuItems = [
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
  { name: 'Work', path: 'https://read.cv/lennartzellmer' },
]
</script>

<style scoped lang="scss">
.router-link-active {
  @apply text-green-500;
}
</style>
