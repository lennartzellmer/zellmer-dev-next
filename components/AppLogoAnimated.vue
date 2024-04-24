<script lang="ts" setup>
import anime from 'animejs'
import blobshape from 'blobshape'

defineProps<{
  isActive: boolean
}>()

function getSvgPath() {
  return blobshape({
    size: 100,
    growth: 5,
    edges: 10,
    seed: null,
  }).path
}

const svgPath = ref('M76.5,60Q78,70,69.5,77.5Q61,85,48.5,88.5Q36,92,29.5,81Q23,70,13,60Q3,50,15,42Q27,34,34,28.5Q41,23,51,19Q61,15,68,23.5Q75,32,75,41Q75,50,76.5,60Z')

function animatePath() {
  const newPath = getSvgPath()
  animate(newPath || svgPath.value)
  svgPath.value = newPath
}

function animate(newSvgPath: string) {
  anime({
    targets: '#morphing-path',
    d: [{ value: newSvgPath }],
    easing: 'spring(1, 80, 15, 20)',
  })
}
</script>

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
    @click="animatePath"
  >
    <path
      id="morphing-path"
      class="text-transparent transition-colors group-hover:text-slate-3 dark:group-hover:text-slate-dark-1"
      fill="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="0"
      :d="svgPath"
    />
    <path
      id="morphing-path"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="6"
      :d="svgPath"
    />
  </svg>
</template>
