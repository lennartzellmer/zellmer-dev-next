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
            <AsyncLogo :is-active="isActive" :svg-path="svgPath" />
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
import { defineAsyncComponent, ref } from '#imports'
import { AppLogo } from '#components'

const getSvgPath = () =>
  blobshape({
    size: 100,
    growth: 5,
    edges: 10,
    seed: null,
  }).path

const svgPath = ref(getSvgPath())

const animatePath = () => {
  svgPath.value = getSvgPath()
}

const AsyncLogo = defineAsyncComponent({
  // the loader function
  loader: () => import('./AppLogoAnimated.vue'),

  // A component to use while the async component is loading
  loadingComponent: AppLogo,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,

  // A component to use if the load fails
  errorComponent: AppLogo,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
})

const menuItems = [
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
  { name: 'Projects', path: '/projects' },
]
</script>
