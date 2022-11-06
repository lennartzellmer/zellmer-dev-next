<template>
    <div>
      <svg
        id="morphing"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 100 100"
        class="h-auto w-full overflow-visible transition"
      >
        <path
          :id="RANDOM_CLASS"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          :d="getSvgPath()"
        />
      </svg>
    </div>
</template>

<script lang="ts" setup>
import anime from 'animejs'
import blobshape from 'blobshape'

const RANDOM_CLASS = 'animate-c17016f9-0143-40f0-9d35-3689e956020c'

const getSvgPath = () =>
  blobshape({
    size: 100,
    growth: 5,
    edges: 10,
    seed: null,
  }).path

const animateNow = () => {
  const newSvgPath = getSvgPath()
  anime({
    targets: `#${RANDOM_CLASS}`,
    d: [{ value: newSvgPath }],
    easing: 'spring(1, 90, 15, 20)',
  })
}

// setInterval(animateNow, 1000)
</script>
