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
        <pre>{{ error.statusMessage || 'Page not found' }}</pre>
        <button class="dark:text-slate-dark-12 hover:bg-slate-5 hover:dark:bg-slate-dark-5 text-slate-12 py-3 px-4 dark:bg-slate-dark-4 bg-slate-4 rounded-lg mt-12 flex mx-auto space-x-2" @click="handleError">
          <PhArrowLeft />
          <PhMoonStars />
          <PhArrowRight />
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import PhMoonStars from 'virtual:icons/ph/house'
import PhArrowRight from 'virtual:icons/ph/arrow-arc-left'
import PhArrowLeft from 'virtual:icons/ph/arrow-arc-right'
import App404Animated from '~~/components/App404Animated.vue'

defineProps<{
  error: any
}>()

const handleError = () => clearError({ redirect: '/' })

</script>
