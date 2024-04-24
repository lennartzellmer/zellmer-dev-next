<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="min-h-screen bg-slate-2 dark:bg-slate-dark-1">
    <section
      class="mx-auto max-w-xl px-4 pt-12 sm:px-6 lg:px-4 min-h-screen"
      @click="handleError"
    >
      <ClientOnly>
        <App404Animated class="col-span-4 col-start-4 text-slate-12 dark:text-slate-dark-12 p-12" />
      </ClientOnly>
      <div class="col-span-4 col-start-4 justify-center items-center text-center text-slate-12 dark:text-slate-dark-12">
        <div class="font-mono">
          {{ error?.statusMessage || 'Page not found' }}
        </div>
        <button
          class="dark:text-slate-dark-12 hover:bg-slate-5 hover:dark:bg-slate-dark-5 text-slate-12 py-3 px-4 dark:bg-slate-dark-4 bg-slate-4 rounded-lg mt-12 flex mx-auto space-x-2"
          @click="handleError"
        >
          <Icon name="ph:arrow-arc-right" />
          <Icon name="ph:house" />
          <Icon name="ph:arrow-arc-left" />
        </button>
      </div>
    </section>
  </div>
</template>
