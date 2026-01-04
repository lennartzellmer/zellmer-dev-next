<script lang="ts" setup>
const menuItems = [
  { name: 'About', path: '/about' },
  { name: 'Articles', path: '/articles' },
  { name: 'Projects', path: '/projects' },
]
</script>

<template>
  <header class="px-4">
    <nav class="mx-auto mt-3 flex max-w-5xl flex-row items-center justify-between py-4 sm:mt-8">
      <ul class="mr-auto flex items-center rounded-full text-sm font-medium sm:ml-3 sm:text-base">
        <li>
          <NuxtLink
            v-slot="{ isActive }"
            class="group focus:outline-none"
            to="/"
          >
            <ClientOnly fallback="span">
              <AppLogoAnimated
                class="size-10 sm:size-14 overflow-hidden"
                :is-active="isActive"
              />
              <template #fallback>
                <div class="size-10 sm:size-14 block overflow-hidden" />
              </template>
            </ClientOnly>
            <p class="sr-only">
              Home
            </p>
          </NuxtLink>
        </li>
        <li
          v-for="menuItem in menuItems"
          :key="menuItem.path"
        >
          <NuxtLink
            v-slot="{ isActive }"
            :to="menuItem.path"
            class="ml-1 rounded-md py-3 px-1.5 transition-colors hover:bg-slate-3 dark:hover:bg-slate-dark-3 sm:ml-2 sm:px-3"
          >
            <span
              :class="[
                isActive
                  ? 'text-green-500'
                  : 'text-slate-12 dark:text-slate-dark-12',
              ]"
            >{{ menuItem.name }}</span>
          </NuxtLink>
        </li>
      </ul>
      <div class="hidden items-center justify-center xs:flex">
        <AppDarkModeToggle class="ml-3" />
      </div>
    </nav>
  </header>
</template>
