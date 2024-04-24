<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HomeHeaderSlice>([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)

function getRotateClass(index: number) {
  const classes = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ]
  return classes[index % classes.length]
}
</script>

<template>
  <section>
    <div
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="mx-auto mt-20 px-4 md:mt-28 max-w-5xl"
    >
      <div class="flex max-w-2xl flex-col">
        <prismic-rich-text
          class="text-3xl leading-tight dark:text-slate-dark-12 md:text-5xl text-slate-12 font-bold"
          :field="slice.primary.headline"
        />
        <prismic-rich-text
          class="mt-6 leading-7 text-slate-11 dark:text-slate-dark-11"
          :field="slice.primary.description"
        />
        <AppSocialLinks class="mt-4" />
      </div>
    </div>
    <div
      class="mt-16 sm:mt-24"
    >
      <div
        class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
      >
        <div
          v-for="(media, index) in slice.items"
          :key="media.image.id!"
          :class="getRotateClass(index)"
          class="relative flex aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <NuxtPicture
            fit="crop"
            alt="Portrait Lennart"
            loading="lazy"
            :src="media.image.url!"
            height="330"
            width="300"
            :img-attrs="{ class: 'object-cover' }"
            class="flex w-full object-cover"
            sizes="xs:150px sm:300px xl:500px"
            :modifiers="{ duotone: '002E2B,EBF3EC' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
