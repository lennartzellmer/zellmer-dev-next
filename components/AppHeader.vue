<template>
  <header class="bg-slate-2">
    <nav class="flex justify-between px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
      <NuxtLink
        class="group flex justify-center items-center space-x-3 text-lg focus:outline-none sm:text-2xl"
        to="/"
        @click="animate"
      >
        <svg
          id="morphing"
          width="100"
          height="100"
          fill="none"
          viewBox="0 0 100 100"
          class="overflow-visible w-12 h-auto text-gray-900 group-hover:text-green-400 transition sm:w-16"
        >
          <path
            id="morphing-path"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            :d="svgPath.path"
          />
        </svg>
        <span
          class="font-mono text-gray-900 group-hover:text-green-400 transition ease-in-out"
          >zellmer.dev</span
        >
      </NuxtLink>
      <div class="flex items-center py-9">
        <a
          class="flex items-center p-1.5 hover:text-green-400 focus:bg-gray-100 focus:rounded-full focus:outline-none focus:ring-2 ring-green-300 transition hover:scale-105 hover:-rotate-6 sm:p-2.5"
          href="mailto:lennart+blog@zellmer.dev"
          subject="Hej,%20what's%20up?"
          target="_blank"
        >
          <span class="sr-only">Write me an email</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5 "
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-7 h-auto feather feather-at-sign"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
          </svg>
        </a>
        <a
          class="flex items-center p-1.5 hover:text-green-400 focus:bg-gray-100 focus:rounded-full focus:outline-none focus:ring-2 ring-green-300 transition hover:scale-105 hover:rotate-6 sm:p-2.5"
          href="https://github.com/lennartzellmer"
          target="_blank"
          rel="noreferrer"
        >
          <span class="sr-only">Go to my GitHub profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-7 h-auto feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </a>
        <a
          class="flex items-center p-1.5 h-full hover:text-green-400 focus:bg-gray-100 focus:rounded-full focus:outline-none focus:ring-2 ring-green-300 transition hover:scale-105 hover:-rotate-6 sm:p-2.5"
          href="https://twitter.com/ZuTeilen"
          target="_blank"
          rel="noreferrer"
        >
          <span class="sr-only">Go to my twitter profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-7 h-auto feather feather-twitter"
          >
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            />
          </svg>
        </a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import blobshape from 'blobshape'
import { defineComponent, useNuxtApp } from '#imports'

export default defineComponent({
  setup() {
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

    return { svgPath, animate }
  },
})
</script>
