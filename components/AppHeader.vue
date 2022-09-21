<template>
  <header class="px-4">
    <nav
      class="mx-auto mt-3 flex max-w-5xl flex-row items-center justify-between py-4 sm:mt-8"
    >
      <ul
        class="mr-auto flex items-center rounded-full text-sm font-medium sm:ml-3 sm:text-base"
      >
        <li>
          <NuxtLink
            v-slot="{ isActive }"
            class="group focus:outline-none"
            to="/"
            @click="animatePath"
          >
            <svg
              id="morphing"
              width="100"
              height="100"
              fill="none"
              viewBox="0 0 100 100"
              class="h-auto w-10 overflow-visible transition transition-colors sm:w-14"
              :class="[
                isActive
                  ? 'text-green-500'
                  : 'text-slate-12 dark:text-slate-dark-12',
              ]"
            >
              <path
                ref="morphingPath1"
                class="text-transparent transition-colors group-hover:text-slate-3 dark:group-hover:text-slate-dark-1"
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                :d="svgPath.path"
              />
              <path
                ref="morphingPath2"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="6"
                :d="svgPath.path"
              />
            </svg>
            <p class="sr-only">Home</p>
          </NuxtLink>
        </li>
        <li v-for="menuItem in menuItems" :key="menuItem.path">
          <NuxtLink
            v-slot="{ isActive }"
            :to="menuItem.path"
            class="ml-1 rounded-md py-3 px-1.5 transition-colors transition-colors hover:bg-slate-3 dark:hover:bg-slate-dark-3 sm:ml-2 sm:px-3"
            ><span
              :class="[
                isActive
                  ? 'text-green-500'
                  : 'text-slate-12 dark:text-slate-dark-12',
              ]"
              >{{ menuItem.name }}</span
            ></NuxtLink
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
import { ref } from '#imports'

const morphingPath1 = ref<HTMLElement | null>(null)
const morphingPath2 = ref<HTMLElement | null>(null)

const getSvgPath = () =>
  blobshape({
    size: 100,
    growth: 5,
    edges: 10,
    seed: null,
  }).path

const svgPath = blobshape({
  size: 100,
  growth: 5,
  edges: 10,
  seed: null,
})

const animatePath = () => {
  morphingPath1.value.setAttribute('d', getSvgPath())
  morphingPath2.value.setAttribute('d', getSvgPath())
}

const menuItems = [
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
  { name: 'Projects', path: '/projects' },
]
</script>

<style>
svg path {
  transition: 0.2s all cubic-bezier(0.69, 1.61, 0.81, 1.01);
}
</style>
