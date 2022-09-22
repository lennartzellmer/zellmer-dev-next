<template>
  <li class="group relative flex flex-col items-start pb-1">
    <h2
      class="mt-2 text-base font-semibold text-slate-12 dark:text-slate-dark-12"
    >
      <div
        class="absolute -inset-y-3 -inset-x-4 z-0 scale-95 bg-slate-3 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-dark-2 sm:-inset-x-6 sm:rounded-xl"
      />
      <a :href="href"
        ><span
          class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"
        /><span class="relative z-10">{{ title }}</span></a
      >
    </h2>
    <p class="relative z-10 mt-2 text-sm text-slate-11 dark:text-slate-dark-11">
      {{ description }}
    </p>
    <p
      class="relative z-10 mt-6 flex text-sm font-medium text-slate-9 transition group-hover:text-green-500 dark:text-slate-dark-9"
    >
      <PhLink class="h-5 w-5 flex-none" />
      <span class="ml-2">{{ readableUrl }}</span>
    </p>
  </li>
</template>

<script lang="ts" setup>
import PhLink from 'virtual:icons/ph/link'

const props = defineProps<{
  title: string
  description: string
  readableUrl: string
  href: string
}>()
</script>
