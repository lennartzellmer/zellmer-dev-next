<script lang="ts" setup>
const props = defineProps<{ slice: any }>()
</script>

<template>
  <div>
    <prismic-rich-text
      class="prismic-rich-text mt-8 break-words prose-a:font-mono prose-a:text-black dark:prose-a:text-white"
      :field="slice.primary.text"
    />
  </div>
</template>

<style lang="scss">
.prismic-rich-text {
  img {
    @apply overflow-hidden rounded-lg;
  }
}
</style>
