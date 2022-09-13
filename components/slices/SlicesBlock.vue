<template>
  <article>
    <template v-for="(slice, index) in props.slices">
      <template v-if="slice.slice_type === 'text'">
        <TextSlice
          :key="'slice-' + index"
          class="prose prose-lg prose-slate max-w-none dark:prose-invert"
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
import { Slice } from '@prismicio/types'
import TextSlice from '@/components/slices/TextSlice.vue'
import ImageSlice from '@/components/slices/ImageSlice.vue'
import CodeSlice from '@/components/slices/CodeSlice.vue'

const props = defineProps<{
  slices: Slice<any>[]
}>()
</script>
