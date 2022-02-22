<template>
  <div
    class="grid grid-cols-2 gap-4 py-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
  >
    <button
      v-for="(item, i) in slice.items"
      :key="i"
      class="overflow-hidden col-span-1 rounded-lg focus:outline-none hover:ring-2 focus:ring ring-slate-7 transition"
      @click="index = i"
    >
      <PrismicImage
        :field="item.image"
        :imgix-params="{ h: 400, w: 400, fit: 'crop' }"
      />
    </button>
    <client-only placeholder="Loading...">
      <AppGallery
        v-if="index !== null"
        :images="images"
        :index="index"
        @close="index = null"
      />
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  name: 'ImageSlice',
  props: {
    slice: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      index: null,
    }
  },
  computed: {
    images() {
      const images: string[] = []
      this.slice.items.forEach((item: any) => {
        images.push(item.image)
      })
      return images
    },
  },
})
</script>
