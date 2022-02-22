<template>
  <article>
    <template v-for="(slice, index) in slices">
      <template v-if="slice.slice_type === 'text'">
        <TextSlice
          :key="'slice-' + index"
          class="max-w-none prose prose-lg"
          :slice="slice"
        />
      </template>
      <template v-if="slice.slice_type === 'image'">
        <ImageSlice :key="'slice-' + index" :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'code'">
        <CodeSlice :key="'slice-' + index" :slice="slice" />
      </template>
    </template>
  </article>
</template>

<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import { Slice } from '@prismicio/types'
import TextSlice from '@/components/slices/TextSlice.vue'
import ImageSlice from '@/components/slices/ImageSlice.vue'
import CodeSlice from '@/components/slices/CodeSlice.vue'

const { slices } = defineProps({
  slices: {
    required: true,
    type: Array as PropType<Slice<any>[]>,
  },
})
</script>
