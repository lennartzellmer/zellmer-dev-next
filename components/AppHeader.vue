<template>
  <header
    class="wlg:px-0 border-b border-slate-2 bg-slate-2 px-4 dark:border-slate-dark-1 dark:bg-slate-dark-1/50"
  >
    <nav
      class="mx-auto flex max-w-5xl flex-col items-center justify-center py-4 sm:flex-row sm:justify-between sm:py-8"
    >
      <NuxtLink
        class="group flex items-center justify-center space-x-2.5 text-lg focus:outline-none sm:text-2xl"
        to="/"
        @click="animate"
      >
        <svg
          id="morphing"
          width="100"
          height="100"
          fill="none"
          viewBox="0 0 100 100"
          class="h-auto w-14 overflow-visible text-slate-12 transition group-hover:text-green-500 dark:text-slate-dark-12 dark:group-hover:text-mint-1 sm:w-12"
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
        <span
          class="font-mono text-2xl text-slate-12 transition ease-in-out group-hover:text-slate-12 dark:text-slate-dark-11 dark:group-hover:text-slate-dark-11"
          >Zellmer</span
        >
      </NuxtLink>
      <div class="mt-4 flex items-center justify-center sm:mt-0">
        <AppDarkModeToggle class="ml-3" />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import blobshape from 'blobshape'
import AppDarkModeToggle from '~/components/AppDarkModeToggle.vue'
import { useNuxtApp } from '#imports'
import AppSocialLinks from '~/components/AppSocialLinks.vue'

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
</script>
