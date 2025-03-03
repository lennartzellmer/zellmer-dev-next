<script lang="ts" setup>
import type { ImageField } from '@prismicio/client'
import { Dialog, DialogPanel, TransitionRoot, TransitionChild, provideUseId } from '@headlessui/vue'
import anime from 'animejs'

provideUseId(() => useId())

const props = defineProps<{
  images: ImageField[]
  index: number | null
}>()

const emit = defineEmits(['close'])

const imgIndex = ref(props.index)
const isOpen = computed(() => props.index !== null)

const selectedImage = computed(() => imgIndex.value !== null ? props.images[imgIndex.value] : null)
const isMultiple = computed(() => props.images.length > 1)

const blurHashes = await Promise.all(
  props.images.map(e =>
    $fetch(e.url!.split('?')[0] + '?fm=blurhash&w=500&h=300'),
  ),
)

watch(
  () => props.index,
  (val) => {
    imgIndex.value = val
  },
)

const onPrev = () => {
  if (imgIndex.value === null) {
    return
  }
  if (imgIndex.value > 0) {
    imgIndex.value--
  }
  else {
    imgIndex.value = props.images.length - 1
  }
}

const onNext = () => {
  if (imgIndex.value === null) {
    return
  }
  if (imgIndex.value < props.images.length - 1) {
    imgIndex.value++
  }
  else {
    imgIndex.value = 0
  }
}

const animateIn = () => {
  const tl = anime.timeline({
    easing: 'easeOutExpo',
  })

  tl.add(
    {
      targets: '.gallery__image_container',
      opacity: [0, 1],
      duration: 150,
      easing: 'easeOutQuad',
    },
    0,
  )

  tl.add(
    {
      targets: '.navigation__image__container',
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 150,

      delay: anime.stagger(50, { from: 'center' }),
      easing: 'easeOutQuad',
    },
    150,
  )

  tl.add(
    {
      targets: ['.gallery__navigation_button'],
      opacity: [0, 1],
      duration: 100,
      easing: 'easeOutQuad',
    },
    0,
  )
}

const closeModal = async () => {
  const tl = anime.timeline({
    direction: 'reverse',
    autoplay: false,
  })

  tl.add(
    {
      targets: '.gallery__image_container',
      opacity: [0, 1],
      duration: 150,
      easing: 'easeOutQuad',
    },
    0,
  )

  tl.add(
    {
      targets: '.navigation__image__container',
      duration: 150,
      opacity: [0, 1],
      easing: 'easeOutQuad',
    },
    0,
  )

  tl.add(
    {
      targets: ['.gallery__navigation_button'],
      opacity: [0, 1],
      duration: 100,
      easing: 'easeOutQuad',
    },
    0,
  )
  tl.play()
  await tl.finished
  emit('close')
}

const onClickThumb = (index: number) => {
  imgIndex.value = index
}
</script>

<template>
  <TransitionRoot
    appear
    :show="isOpen"
    as="template"
  >
    <Dialog
      as="div"
      class="relative z-50"
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
          @before-enter="animateIn"
        >
          <DialogPanel
            class="flex w-full max-w-5xl items-center justify-center px-0 sm:p-8"
          >
            <button
              type="button"
              class="gallery__navigation_button :dark:text-slate-dark-11 absolute top-2 right-2 h-12 w-12 rounded-md p-2 text-slate-11 hover:text-green-400 focus:outline-none"
              @click="closeModal"
            >
              <Icon
                name="ph:x"
                class="h-auto w-8"
              />
            </button>
            <button
              v-if="isMultiple"
              type="button"
              class="gallery__navigation_button :dark:text-slate-dark-11 absolute bottom-4 left-2 h-12 w-12 cursor-pointer rounded-md p-2 text-slate-11 transition-all hover:left-1.5 hover:text-green-400 focus:outline-none sm:bottom-1/2 sm:translate-y-1/2"
              @click.stop="onPrev"
            >
              <Icon
                name="ph:arrow-left"
                class="h-auto w-full"
              />
            </button>
            <button
              v-if="isMultiple"
              type="button"
              class="gallery__navigation_button :dark:text-slate-dark-11 absolute right-2 bottom-4 h-12 w-12 cursor-pointer rounded-md p-2 text-slate-11 transition-all hover:right-1.5 hover:text-green-400 focus:outline-none sm:bottom-1/2 sm:translate-y-1/2"
              @click.stop="onNext"
            >
              <Icon
                name="ph:arrow-right"
                class="h-auto w-full"
              />
            </button>
            <div
              v-if="selectedImage"
              class="gallery__image_container w-full"
            >
              <AppGalleryImg
                v-if="images"
                :key="selectedImage.id || ''"
                :image="selectedImage"
                :blur-hash="blurHashes[imgIndex!] as string"
              />
              <div
                v-if="isMultiple"
                ref="gallery"
                class="z-[999] mt-4 hidden w-full whitespace-nowrap sm:flex sm:flex-col sm:justify-center"
              >
                <div
                  v-if="images"
                  class="flex items-stretch justify-center space-x-2"
                >
                  <button
                    v-for="(img, i) in images"
                    :key="i"
                    class="navigation__image__container shrink grow-0 cursor-pointer overflow-hidden rounded-md shadow-md focus:outline-none"
                    @click.stop="onClickThumb(i)"
                  >
                    <NuxtImg
                      fit="crop"
                      width="300"
                      height="300"
                      class="h-20 object-cover transition-all hover:opacity-100"
                      :src="img.url!"
                      :class="[
                        i === imgIndex ? 'w-20 opacity-100' : 'w-10 opacity-80',
                      ]"
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

<style>
.gallery__navigation_button,
.gallery__image_container {
  opacity: 0;
}
</style>
