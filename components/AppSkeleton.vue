<template>
  <span :style="{ height: computedHeight, width: computedWidth }" class="SkeletonBox" />
</template>

<script setup lang="ts">
interface Props {
  maxWidth?: number,
  minWidth?: number,
  height?: string,
  width?: string,
  customStyle?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  maxWidth: 100,
  minWidth: 80,
  height: '1em',
  width: undefined,
  customStyle: false
})

const computedHeight = computed(() => {
  if (props.customStyle) {
    return ''
  }

  return props.height
})

const computedWidth = computed(() => {
  if (props.customStyle) {
    return ''
  }
  if (props.width) {
    return props.width
  }
  return `${Math.floor(Math.random() * (props.maxWidth - props.minWidth) + props.minWidth)}%`
})
</script>

<style lang="scss">
.SkeletonBox {
  border-radius: 4px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  @apply bg-slate-8 dark:bg-slate-dark-8;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 10%,
      rgba(#fff, 0.4) 70%,
      rgba(#fff, 0)
    );
    animation: shimmer 2s infinite;
    content: '';
  }
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
}
</style>
