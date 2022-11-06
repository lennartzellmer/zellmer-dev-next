<template>
  <section
    class="mx-auto max-w-5xl grid-cols-12 gap-8 px-4 pt-12 sm:grid sm:px-6 lg:px-4"
  >
  <ClientOnly>
    <App404Animated class="col-span-4 col-start-4" />
  </ClientOnly>
    <div>
      <pre>
        {{ error.statusMessage || 'Page not found' }}
      </pre>
      <button class="" @click="handleError">Home</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import App404Animated from "~~/components/App404Animated.vue"

defineProps<{
  error: any
}>()

const handleError = () => clearError({ redirect: '/' })

</script>
