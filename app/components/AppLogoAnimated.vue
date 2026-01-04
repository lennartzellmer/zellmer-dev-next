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

const svgPath = ref(getSvgPath())

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
    class="h-auto overflow-visible transition"
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
