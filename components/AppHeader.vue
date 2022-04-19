<template>
  <header
    class="bg-slate-3 dark:bg-slate-dark-1/50 border-b dark:border-slate-dark-1 border-slate-4"
  >
    <nav
      class="flex flex-col sm:flex-row justify-center items-center p-4 mx-auto max-w-6xl sm:px-6 sm:py-8 sm:justify-between lg:px-8"
    >
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
          class="overflow-visible w-12 h-auto text-slate-12 dark:text-slate-dark-12 dark:group-hover:text-mint-1 group-hover:text-green-500 transition sm:w-16"
        >
          <path
            id="morphing-path"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="4"
            :d="svgPath.path"
          />
          <path
            id="morphing-path"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
            :d="svgPath.path"
            class="hidden dark:block group-hover:blur text-blue-5 transition-opacity opacity-0 group-hover:opacity-100"
          />
        </svg>
        <span
          class="font-mono text-slate-12 dark:text-slate-dark-11 group-hover:text-green-400 dark:group-hover:text-slate-dark-8 transition ease-in-out"
          >zellmer</span
        >
      </NuxtLink>
      <div class="flex items-center justify-center mt-4 sm:mt-0">
        <a
          class="flex items-center p-1.5 hover:text-green-400 dark:text-slate-dark-11 dark:hover:text-white focus:bg-gray-100 focus:rounded-full focus:outline-none focus:ring-2 ring-green-300 transition hover:scale-105 hover:-rotate-6 sm:p-2.5"
          href="mailto:lennart+blog@zellmer.dev"
          subject="Hej,%20what's%20up?"
          target="_blank"
        >
          <span class="sr-only">Write me an email</span>
          <PhPaperPlaneTilt class="w-7 h-auto" />
        </a>
        <a
          class="flex items-center p-1.5 hover:text-green-400 dark:text-slate-dark-11 dark:hover:text-white focus:bg-gray-100 focus:rounded-full focus:outline-none focus:ring-2 ring-green-300 transition hover:scale-105 hover:rotate-6 sm:p-2.5"
          href="https://github.com/lennartzellmer"
          target="_blank"
          rel="noreferrer"
        >
          <span class="sr-only">Go to my GitHub profile</span>
          <PhGithubLogo class="w-7 h-auto" />
        </a>
        <a
          class="flex items-center p-1.5 h-full hover:text-green-400 dark:text-slate-dark-11 dark:hover:text-white focus:bg-gray-100 focus:rounded-full focus:outline-none focus:ring-2 ring-green-300 transition hover:scale-105 hover:-rotate-6 sm:p-2.5"
          href="https://twitter.com/ZuTeilen"
          target="_blank"
          rel="noreferrer"
        >
          <span class="sr-only">Go to my twitter profile</span>
          <PhTwitterLogo class="w-7 h-auto" />
        </a>
        <a
          class="flex items-center p-1.5 h-full hover:text-green-400 dark:text-slate-dark-11 dark:hover:text-white focus:bg-gray-100 focus:rounded-full focus:outline-none focus:ring-2 ring-green-300 transition hover:scale-105 hover:-rotate-6 sm:p-2.5"
          href="https://www.linkedin.com/in/lennart-zellmer-b098b2116"
          target="_blank"
          rel="noreferrer"
        >
          <span class="sr-only">Go to my linkedin profile</span>
          <PhLinkedinLogo class="w-7 h-auto" />
        </a>
        <AppDarkModeToggle
          class="ml-3 pl-4 border-l border-slate-7 dark:border-slate-dark-7"
        />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import blobshape from 'blobshape'
import PhGithubLogo from 'virtual:icons/ph/github-logo'
import PhPaperPlaneTilt from 'virtual:icons/ph/paper-plane-tilt'
import PhTwitterLogo from 'virtual:icons/ph/twitter-logo'
import PhLinkedinLogo from 'virtual:icons/ph/linkedin-logo'
import AppDarkModeToggle from '~/components/AppDarkModeToggle.vue'
import { defineComponent, useNuxtApp } from '#imports'

export default defineComponent({
  components: {
    AppDarkModeToggle,
    PhGithubLogo,
    PhPaperPlaneTilt,
    PhTwitterLogo,
    PhLinkedinLogo,
  },
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
