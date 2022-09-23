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
            <LazyClientOnly>
              <!-- this component will only be rendered on client side -->
              <LazyAppLogoAnimated :is-active="isActive" :svg-path="svgPath" />
              <template #fallback>
                <!-- this will be rendered on server side -->
                <AppLogo :is-active="isActive" :svg-path="svgPath" />
              </template>
            </LazyClientOnly>
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

const svgPath = ref(
  'M78.5,58.5Q74,67,69.5,82Q65,97,53,87.5Q41,78,30.5,75Q20,72,19,61Q18,50,16,37Q14,24,26.5,19.5Q39,15,49,19Q59,23,72.5,23.5Q86,24,84.5,37Q83,50,78.5,58.5Z'
)

const animatePath = () => {
  svgPath.value = getSvgPath()
}

const menuItems = [
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
  { name: 'Projects', path: '/projects' },
]
</script>
