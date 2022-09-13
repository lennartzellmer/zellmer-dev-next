<template>
  <div class="relative flex text-slate-9 dark:text-slate-dark-9">
    <a
      class="flex items-center p-1.5 ring-green-300 transition hover:-rotate-6 hover:scale-105 hover:text-green-400 focus:rounded-full focus:bg-gray-100 focus:outline-none focus:ring-2 dark:hover:text-white sm:p-2"
      href="mailto:lennart+blog@zellmer.dev"
      subject="Hej,%20what's%20up?"
      target="_blank"
    >
      <span class="sr-only">Write me an email</span>
      <PhPaperPlaneTilt class="h-auto w-6" />
    </a>
    <a
      class="flex items-center p-1.5 ring-green-300 transition hover:rotate-6 hover:scale-105 hover:text-green-400 focus:rounded-full focus:bg-gray-100 focus:outline-none focus:ring-2 dark:hover:text-white sm:p-2"
      href="https://github.com/lennartzellmer"
      target="_blank"
      rel="noreferrer"
    >
      <span class="sr-only">Go to my GitHub profile</span>
      <PhGithubLogo class="h-auto w-6" />
    </a>
    <a
      class="flex h-full items-center p-1.5 ring-green-300 transition hover:-rotate-6 hover:scale-105 hover:text-green-400 focus:rounded-full focus:bg-gray-100 focus:outline-none focus:ring-2 dark:hover:text-white sm:p-2"
      href="https://twitter.com/ZuTeilen"
      target="_blank"
      rel="noreferrer"
    >
      <span class="sr-only">Go to my twitter profile</span>
      <PhTwitterLogo class="h-auto w-6" />
    </a>
    <a
      class="flex h-full items-center p-1.5 ring-green-300 transition hover:-rotate-6 hover:scale-105 hover:text-green-400 focus:rounded-full focus:bg-gray-100 focus:outline-none focus:ring-2 dark:hover:text-white sm:p-2"
      href="https://www.linkedin.com/in/lennart-zellmer-b098b2116"
      target="_blank"
      rel="noreferrer"
    >
      <span class="sr-only">Go to my linkedin profile</span>
      <PhLinkedinLogo class="h-auto w-6" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import PhGithubLogo from 'virtual:icons/ph/github-logo'
import PhPaperPlaneTilt from 'virtual:icons/ph/paper-plane-tilt'
import PhTwitterLogo from 'virtual:icons/ph/twitter-logo'
import PhLinkedinLogo from 'virtual:icons/ph/linkedin-logo'
</script>
