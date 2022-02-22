<template>
  <transition name="modal">
    <div
      class="flex fixed inset-0 z-[9998] flex-col justify-center items-center px-0 sm:p-8"
      @click="close"
    >
      <span
        class="absolute inset-0 z-[997] bg-gray-900 bg-opacity-95 gallery__background"
      />
      <button
        type="button"
        class="absolute top-2 right-2 z-[999] p-2 w-12 h-12 text-gray-400 hover:text-green-400 bg-gray-800 rounded-md focus:outline-none opacity-0 hover:scale-110 gallery__navigation_button"
        @click="close"
      >
        <svg class="w-full" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M17.25 6.75L6.75 17.25"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6.75 6.75L17.25 17.25"
          />
        </svg>
      </button>
      <button
        v-if="isMultiple"
        type="button"
        class="absolute bottom-4 left-2 hover:left-1.5 z-[999] p-2 w-12 h-12 text-gray-400 hover:text-green-400 bg-gray-800 rounded-md focus:outline-none opacity-0 transition-all cursor-pointer sm:bottom-1/2 sm:translate-y-1/2 gallery__navigation_button"
        @click.stop="onPrev"
      >
        <svg class="w-full" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10.25 6.75L4.75 12L10.25 17.25"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.25 12H5"
          />
        </svg>
      </button>
      <div
        v-if="images"
        class="flex overflow-x-hidden z-[998] w-full max-w-full h-full bg-black sm:rounded-lg md:max-w-7xl gallery__image_container"
        @click.stop="onNext"
      >
        <PrismicImage
          class="flex w-full h-auto gallery__nuxt_picture"
          :imgix-params="{ w: 2300 }"
          :field="selectedImage"
          @click.stop="onNext"
        />
      </div>
      <button
        v-if="isMultiple"
        type="button"
        class="absolute right-2 hover:right-1.5 bottom-4 z-[999] p-2 w-12 h-12 text-gray-400 hover:text-green-400 bg-gray-800 rounded-md focus:outline-none opacity-0 transition-all cursor-pointer sm:bottom-1/2 sm:translate-y-1/2 gallery__navigation_button"
        @click.stop="onNext"
      >
        <svg class="w-full" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13.75 6.75L19.25 12L13.75 17.25"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19 12H4.75"
          />
        </svg>
      </button>
      <div
        v-if="isMultiple"
        ref="gallery"
        class="hidden z-[999] mt-4 w-full max-w-7xl whitespace-nowrap sm:flex sm:flex-col sm:justify-center"
      >
        <span
          v-if="images"
          class="mb-2 font-mono text-gray-400 gallery__navigation_index"
        >
          {{ imgIndex + 1 }} / {{ images.length }}
        </span>
        <div v-if="images" class="flex justify-start items-stretch space-x-4">
          <button
            v-for="(img, i) in images"
            :key="i"
            class="object-cover overflow-hidden grow-0 shrink w-20 h-20 rounded-md focus:outline-none opacity-60 hover:opacity-100 cursor-pointer navigation__image__container"
            :class="{ 'ring ring-gray-300 opacity-100': i === imgIndex }"
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
  </transition>
</template>

<script lang="ts">
import { PropType } from '@vue/runtime-core'
import { ImageField } from '@prismicio/types'
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    images: {
      type: Array as PropType<ImageField[]>,
      required: true,
    },
    index: {
      type: Number,
      required: false,
      default: null,
    },
  },
  data() {
    return {
      imgIndex: this.index,
      image: null,
    }
  },
  computed: {
    selectedImage() {
      return this.images[this.imgIndex]
    },
    isMultiple() {
      return this.images.length > 1
    },
  },
  watch: {
    index(val) {
      this.imgIndex = val
    },
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 37) {
        this.onPrev()
      } else if (e.keyCode === 39) {
        this.onNext()
      } else if (e.keyCode === 27) {
        this.close()
      }
    })

    this.animateIn()
  },
  methods: {
    animateIn() {
      const anime = this.$anime

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
          targets: [
            '.gallery__navigation_button',
            '.gallery__navigation_index',
          ],
          opacity: [0, 1],
          duration: 200,
          easing: 'easeOutQuad',
        },
        '-=100'
      )
    },
    animateOut() {
      const anime = this.$anime

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
          targets: [
            '.gallery__navigation_button',
            '.gallery__navigation_index',
          ],
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
    },
    async close() {
      await this.animateOut().finished
      const eventData = {
        imgIndex: this.imgIndex,
      }
      this.imgIndex = null
      this.$emit('close', eventData)
    },
    onPrev() {
      if (this.imgIndex === null) return
      if (this.imgIndex > 0) {
        this.imgIndex--
      } else {
        this.imgIndex = this.images.length - 1
      }
    },
    onNext() {
      if (this.imgIndex === null) return
      if (this.imgIndex < this.images.length - 1) {
        this.imgIndex++
      } else {
        this.imgIndex = 0
      }
    },
    onClickThumb(index) {
      this.imgIndex = index
    },
  },
})
</script>

<style lang="scss">
.gallery__nuxt_picture {
  display: flex;
  object-fit: cover;
  img {
    @apply object-cover;
  }
}
</style>
