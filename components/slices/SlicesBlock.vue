<script lang="ts" setup>
import type { Slice } from '@prismicio/types'

const props = defineProps<{
  slices: Slice<any>[]
}>()
</script>

<template>
  <article>
    <template v-for="(slice, index) in props.slices">
      <template v-if="slice.slice_type === 'text'">
        <SlicesTextSlice
          :key="`slice-${index}`"
          class="prose prose-lg prose-slate max-w-none dark:prose-invert"
          :slice="slice"
        />
      </template>
      <template v-if="slice.slice_type === 'image'">
        <SlicesImageSlice :key="`slice-${index}`" :slice="slice" />
      </template>
      <template v-if="slice.slice_type === 'code'">
        <LazySlicesCodeSlice :key="`slice-${index}`" :slice="slice" />
      </template>
    </template>
  </article>
</template>
