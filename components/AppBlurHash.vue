<script lang="ts" setup>
import { decode } from 'blurhash'

const props = defineProps({
  width: { type: Number, default: 128 },
  height: { type: Number, default: 128 },
  hash: { type: String, required: true },
})

watch(
  () => [props.hash, props.height, props.width],
  () => draw(),
)

const canvas = ref<HTMLCanvasElement>()

const sanitizedDimensions = computed(() => {
  const ratio = props.width / props.height
  return {
    width: Math.round(ratio * 100),
    height: 100,
  }
})

const draw = () => {
  try {
    const pixels = decode(
      props.hash,
      sanitizedDimensions.value.width,
      sanitizedDimensions.value.height,
    )
    const ctx = canvas.value!.getContext('2d')!
    const imageData = ctx.createImageData(
      sanitizedDimensions.value.width,
      sanitizedDimensions.value.height,
    )
    imageData.data.set(pixels)
    ctx.putImageData(imageData, 0, 0)
  }
  catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  draw()
})
</script>

<template>
  <canvas
    ref="canvas"
    :width="sanitizedDimensions.width"
    :height="sanitizedDimensions.height"
    style="
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    "
  />
</template>
