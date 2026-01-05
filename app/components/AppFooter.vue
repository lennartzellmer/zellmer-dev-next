<template>
  <footer class="mx-auto my-12 flex max-w-5xl flex-row items-center justify-between py-4 sm:mt-8 px-4 sm:px-0">
    <nav class="flex items-center gap-4 rounded-full text-sm font-medium sm:text-base">
      <a
        href="https://github.com/lennartzellmer"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center py-2 text-slate-11 transition hover:text-green-500 dark:text-slate-dark-11"
      >
        <span class="text-base">Source</span>
      </a>
      <NuxtLink
        to="/imprint"
        class="flex items-center py-2 text-slate-11 transition hover:text-green-500 dark:text-slate-dark-11"
      >
        <span class="text-base">Imprint</span>
      </nuxtlink>
    </nav>
    <span class=" text-slate-11 font-mono py-2">lennart.zellmer.dev</span>
  </footer>
</template>
