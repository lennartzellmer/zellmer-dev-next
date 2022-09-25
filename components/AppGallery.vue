<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      as="div"
      class="relative z-10"
      @keyup.right="onNext"
      @keyup.left="onPrev"
      @close="closeModal"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="gallery__background fixed inset-0 bg-slate-1/90 dark:bg-black/90"
        />
      </TransitionChild>

      <div class="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
          @beforeEnter="animateIn"
        >
          <DialogPanel
            class="flex w-full max-w-5xl items-center justify-center px-0 sm:p-8"
          >
            <button
              type="button"
              class="gallery__navigation_button :dark:text-slate-dark-11 absolute top-2 right-2 h-12 w-12 rounded-md p-2 text-slate-11 hover:text-green-400 focus:outline-none"
              @click="closeModal"
            >
              <PhX class="h-auto w-8" />
            </button>
            <button
              v-if="isMultiple"
              type="button"
              class="gallery__navigation_button :dark:text-slate-dark-11 absolute bottom-4 left-2 h-12 w-12 cursor-pointer rounded-md p-2 text-slate-11 transition-all hover:left-1.5 hover:text-green-400 focus:outline-none sm:bottom-1/2 sm:translate-y-1/2"
              @click.stop="onPrev"
            >
              <PhArrowLeft class="h-auto w-full" />
            </button>
            <button
              v-if="isMultiple"
              type="button"
              class="gallery__navigation_button :dark:text-slate-dark-11 absolute right-2 bottom-4 h-12 w-12 cursor-pointer rounded-md p-2 text-slate-11 transition-all hover:right-1.5 hover:text-green-400 focus:outline-none sm:bottom-1/2 sm:translate-y-1/2"
              @click.stop="onNext"
            >
              <PhArrowRight class="h-auto w-full" />
            </button>
            <div v-if="selectedImage" class="gallery__image_container w-full">
              <AppGalleryImg
                v-if="images"
                :key="selectedImage.url"
                :src="selectedImage.url"
                :alt="selectedImage.alt || ''"
                :width="5000"
                :height="3000"
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
                <div
                  v-if="images"
                  class="flex items-stretch justify-start space-x-4"
                >
                  <button
                    v-for="(img, i) in images"
                    :key="i"
                    class="navigation__image__container h-20 w-20 shrink grow-0 cursor-pointer overflow-hidden rounded-md object-cover shadow-md hover:opacity-100 focus:outline-none"
                    :class="[
                      i === imgIndex
                        ? 'opacity-100 ring ring-slate-9 dark:ring-slate-dark-9'
                        : 'opacity-80',
                    ]"
                    @click.stop="onClickThumb(i)"
                  >
                    <NuxtImg
                      fit="crop"
                      width="300"
                      height="300"
                      :modifiers="{ w: 300, h: 300 }"
                      :src="img.url"
                    />
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { ImageField } from '@prismicio/types'
import {
  Dialog,
  DialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import PhX from 'virtual:icons/ph/x'
import PhArrowRight from 'virtual:icons/ph/arrow-right'
import PhArrowLeft from 'virtual:icons/ph/arrow-left'
import { $fetch } from 'ohmyfetch'
import anime from 'animejs'
import { computed, ref, watch } from '#imports'
import AppGalleryImg from '~/components/AppGalleryImg.vue'

const props = defineProps<{
  images: ImageField[]
  index: number | null
}>()

const emit = defineEmits(['close'])

const imgIndex = ref(props.index)
const isOpen = computed(() => props.index !== null)

const selectedImage = computed(() => props.images[imgIndex.value])
const isMultiple = computed(() => props.images.length > 1)

const blurHashes = await Promise.all(
  props.images.map((e) =>
    $fetch(e.url.split('?')[0] + '?fm=blurhash&w=500&h=300')
  )
)

watch(
  () => props.index,
  (val) => {
    imgIndex.value = val
  }
)

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

const animateIn = () => {
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1200,
  })

  tl.add({
    targets: '.gallery__image_container',
    opacity: [0, 1],
    duration: 400,
    easing: 'easeOutQuad',
  })

  tl.add(
    {
      targets: '.navigation__image__container',
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(50),
      duration: 200,
      easing: 'easeOutQuad',
    },
    '-=400'
  )

  tl.add(
    {
      targets: ['.gallery__navigation_button', '.gallery__navigation_index'],
      opacity: [0, 1],
      duration: 200,
      easing: 'easeOutQuad',
    },
    '-=400'
  )
}

const closeModal = async () => {
  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1200,
    direction: 'reverse',
    autoplay: false,
  })

  tl.add({
    targets: '.gallery__image_container',
    opacity: [0, 1],
    duration: 200,
    easing: 'easeOutQuad',
  })

  tl.add(
    {
      targets: '.navigation__image__container',
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(50),
      duration: 200,
      easing: 'easeOutQuad',
    },
    '-=400'
  )

  tl.add(
    {
      targets: ['.gallery__navigation_button', '.gallery__navigation_index'],
      opacity: [0, 1],
      duration: 200,
      easing: 'easeOutQuad',
    },
    '-=400'
  )
  tl.play()
  await tl.finished
  emit('close')
}

const onClickThumb = (index) => {
  imgIndex.value = index
}
</script>

<style>
.gallery__navigation_index,
.gallery__navigation_button,
.gallery__image_container,
.gallery__navigation_index {
  opacity: 0;
}
</style>
