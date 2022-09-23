<template>
  <svg
    id="morphing"
    width="100"
    height="100"
    fill="none"
    viewBox="0 0 100 100"
    class="h-auto w-10 overflow-visible transition transition-colors sm:w-14"
    :class="[
      isActive ? 'text-green-500' : 'text-slate-12 dark:text-slate-dark-12',
    ]"
  >
    <path
      ref="morphingPath1"
      class="text-transparent transition-colors group-hover:text-slate-3 dark:group-hover:text-slate-dark-1"
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="0"
      :d="svgPath"
    />
    <path
      ref="morphingPath2"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="6"
      :d="svgPath"
    />
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps<{ svgPath: string; isActive: boolean }>()
</script>

<style scoped lang="scss">
svg path {
  transition: 0.2s all cubic-bezier(0.69, 1.61, 0.81, 1.01);
}
</style>
