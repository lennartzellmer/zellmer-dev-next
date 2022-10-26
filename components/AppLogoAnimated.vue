<template>
  <svg
    id="morphing"
    width="100"
    height="100"
    fill="none"
    viewBox="0 0 100 100"
    class="h-auto w-10 overflow-visible transition sm:w-14"
    :class="[
      isActive ? 'text-green-500' : 'text-slate-12 dark:text-slate-dark-12',
    ]"
  >
    <path
      id="morphing-path"
      class="text-transparent transition-colors group-hover:text-slate-3 dark:group-hover:text-slate-dark-1"
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="0"
      :d="renderedSvgPath"
    />
    <path
      id="morphing-path"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="6"
      :d="renderedSvgPath"
    />
  </svg>
</template>

<script lang="ts" setup>
import anime from 'animejs'
import { ref, watch } from '#imports'

const props = defineProps<{ svgPath: string; isActive: boolean }>()

const renderedSvgPath = ref(props.svgPath)

const animate = (newSvgPath: string) => {
  anime({
    targets: '#morphing-path',
    d: [{ value: newSvgPath }],
    easing: 'spring(1, 80, 15, 20)',
  })
}

watch(
  () => props.svgPath,
  (newSvgPath, oldSvgPath) => animate(newSvgPath || oldSvgPath)
)
</script>
