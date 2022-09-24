<template>
  <transition name="modal">
    <div
      class="fixed inset-0 z-[9998] flex flex-col items-center justify-center px-0 sm:p-8"
      @click="close"
    >
      <span
        class="gallery__background absolute inset-0 z-[997] bg-slate-1/90 dark:bg-black/90"
      />
      <button
        type="button"
        class="gallery__navigation_button :dark:text-slate-dark-11 absolute top-2 right-2 z-[999] h-12 w-12 rounded-md p-2 text-slate-11 opacity-0 hover:text-green-400 focus:outline-none"
        @click="close"
      >
        <PhX class="h-auto w-8" />
      </button>
      <button
        v-if="isMultiple"
        type="button"
        class="gallery__navigation_button :dark:text-slate-dark-11 absolute bottom-4 left-2 z-[999] h-12 w-12 cursor-pointer rounded-md p-2 text-slate-11 opacity-0 transition-all hover:left-1.5 hover:text-green-400 focus:outline-none sm:bottom-1/2 sm:translate-y-1/2"
        @click.stop="onPrev"
      >
        <PhArrowLeft class="h-auto w-full" />
      </button>
      <button
        v-if="isMultiple"
        type="button"
        class="gallery__navigation_button :dark:text-slate-dark-11 absolute right-2 bottom-4 z-[999] h-12 w-12 cursor-pointer rounded-md p-2 text-slate-11 opacity-0 transition-all hover:right-1.5 hover:text-green-400 focus:outline-none sm:bottom-1/2 sm:translate-y-1/2"
        @click.stop="onNext"
      >
        <PhArrowRight class="h-auto w-full" />
      </button>
      <div class="z-[998] w-full max-w-7xl">
        <AppGalleryImg
          v-if="images"
          :key="selectedImage.url"
          :selected-image="selectedImage"
          :blur-hash="blurHashes[imgIndex]"
        />
        <div
          v-if="isMultiple"
          ref="gallery"
          class="z-[999] mt-4 hidden w-full whitespace-nowrap sm:flex sm:flex-col sm:justify-center"
        >
          <span
            v-if="images"
            class="gallery__navigation_index :dark:text-slate-dark-11 mb-2 font-mono text-slate-11"
          >
            {{ imgIndex + 1 }} / {{ images.length }}
          </span>
          <div v-if="images" class="flex items-stretch justify-start space-x-4">
            <button
              v-for="(img, i) in images"
              :key="i"
              class="navigation__image__container h-20 w-20 shrink grow-0 cursor-pointer overflow-hidden rounded-md object-cover opacity-60 shadow-md hover:opacity-100 focus:outline-none"
              :class="{
                'opacity-100 ring ring-slate-9 dark:ring-slate-dark-9':
                  i === imgIndex,
              }"
              @click.stop="onClickThumb(i)"
            >
              <PrismicImage
                :imgix-params="{ w: 300, h: 300, fit: 'crop' }"
                :field="img"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ImageField } from '@prismicio/types'
import anime from 'animejs'
import PhX from 'virtual:icons/ph/x'
import PhArrowRight from 'virtual:icons/ph/arrow-right'
import PhArrowLeft from 'virtual:icons/ph/arrow-left'
import { $fetch } from 'ohmyfetch'
import { computed, onMounted, ref, watch } from '#imports'
import AppGalleryImg from '~/components/AppGalleryImg.vue'

const props = defineProps<{
  images: ImageField[]
  index: number
}>()

const emit = defineEmits<{
  (
    e: 'close',
    data: {
      imgIndex: number
    }
  ): void
}>()

const imgIndex = ref(props.index)

const selectedImage = computed(() => props.images[imgIndex.value])
const isMultiple = computed(() => props.images.length > 1)

const blurHashes = await Promise.all(
  props.images.map((e) =>
    $fetch(e.url.split('?')[0] + '?fm=blurhash&w=500&h=300')
  )
)

watch(
  () => props.index,
  (val) => (imgIndex.value = val)
)

const animateIn = () => {
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1200,
  })

  tl.add({
    targets: '.gallery__background',
    opacity: [0, 1],
    delay: anime.stagger(50),
    duration: 400,
    easing: 'easeOutQuad',
  })

  tl.add(
    {
      targets: '.gallery__image_container',
      opacity: [0, 1],
      duration: 400,
      easing: 'easeOutQuad',
    },
    '-=200'
  )

  tl.add(
    {
      targets: '.navigation__image__container',
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(50),
      duration: 200,
      easing: 'easeOutQuad',
    },
    '-=100'
  )

  tl.add(
    {
      targets: ['.gallery__navigation_button', '.gallery__navigation_index'],
      opacity: [0, 1],
      duration: 200,
      easing: 'easeOutQuad',
    },
    '-=100'
  )
}
const animateOut = () => {
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 300,
  })

  tl.add({
    targets: '.gallery__image_container',
    opacity: [1, 0],
    duration: 300,
    easing: 'easeOutQuad',
  })

  tl.add(
    {
      targets: '.navigation__image__container',
      scale: [1, 0.9],
      opacity: [1, 0],
      delay: anime.stagger(50),
      duration: 300,
      easing: 'easeOutQuad',
    },
    '-300'
  )

  tl.add(
    {
      targets: ['.gallery__navigation_button', '.gallery__navigation_index'],
      opacity: [1, 0],
      duration: 200,
      easing: 'easeOutQuad',
    },
    '-300'
  )

  tl.add(
    {
      targets: '.gallery__background',
      opacity: [1, 0],
      delay: anime.stagger(50),
      duration: 400,
      easing: 'easeOutQuad',
    },
    '-300'
  )

  return tl
}
const close = async () => {
  await animateOut().finished
  const eventData = {
    imgIndex: imgIndex.value,
  }
  imgIndex.value = null
  emit('close', eventData)
}
const onPrev = () => {
  if (imgIndex.value === null) return
  if (imgIndex.value > 0) {
    imgIndex.value--
  } else {
    imgIndex.value = props.images.length - 1
  }
}
const onNext = () => {
  if (imgIndex.value === null) return
  if (imgIndex.value < props.images.length - 1) {
    imgIndex.value++
  } else {
    imgIndex.value = 0
  }
}
const onClickThumb = (index) => {
  imgIndex.value = index
}

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 37) {
      onPrev()
    } else if (e.keyCode === 39) {
      onNext()
    } else if (e.keyCode === 27) {
      close()
    }
  })

  animateIn()
})
</script>

<style lang="scss">
.gallery__nuxt_picture {
  display: flex;
  object-fit: contain;
  img {
    @apply object-cover;
  }
}
</style>
