<script lang="ts" setup>
import PhCaretRight from 'virtual:icons/ph/caret-right-bold'

const props = defineProps<{
  post: any
}>()

const formattedDate = new Date(
  props.post.first_publication_date
).toLocaleDateString('en-EN', {
  year: 'numeric',
  month: 'long'
})
</script>

<template>
  <NuxtLink
    class="group flex cursor-pointer flex-col py-8 focus:outline-none sm:flex-row"
    :to="'/posts/' + props.post.uid"
  >
    <div
      class="relative z-20 hidden h-36 w-full shrink-0 overflow-hidden rounded-lg bg-slate-1 transition-all dark:bg-slate-dark-1 sm:flex sm:h-auto sm:w-48 sm:group-hover:w-52 sm:group-focus:w-52"
    >
      <nuxt-picture
        loading="lazy"
        :src="props.post.data.thumbnail.url"
        :alt="props.post.data.thumbnail.alt"
        fit="crop"
        height="250"
        width="250"
        class="AppArticlePreview__picture transition-all group-hover:brightness-100 dark:brightness-90"
        sizes="xs:150px sm:250px lg:400px"
      />
    </div>
    <article
      class="z-10 mt-6 mb-3 w-full rounded-r-lg transition-all sm:mt-3 sm:py-8 sm:pr-10 sm:pl-8 sm:group-hover:bg-slate-3 sm:group-hover:pr-6 sm:group-hover:pl-8 sm:group-focus:bg-slate-3 sm:group-focus:pr-6 sm:group-focus:pl-8 dark:sm:group-hover:bg-slate-dark-1 dark:sm:group-focus:bg-slate-dark-1"
    >
      <span class="font-mono text-sm text-slate-11 dark:text-slate-dark-11">
        {{ formattedDate }}
      </span>
      <h2
        class="mb-3 text-2xl font-bold text-slate-12 dark:text-slate-dark-12 sm:text-2xl"
      >
        {{ $prismic.asText(props.post.data.headline) }}
      </h2>
      <p
        class="overflow-hidden text-ellipsis text-base leading-7 text-slate-11 dark:text-slate-dark-11"
      >
        {{ $prismic.asText(props.post.data.description) }}
      </p>
      <div class="mt-4 flex items-center space-x-1 text-green-500">
        <p>Read article</p>
        <PhCaretRight class="h-auto w-4" />
      </div>
    </article>
  </NuxtLink>
</template>

<style lang="scss">
.AppArticlePreview__picture {
  display: flex;
  object-fit: cover;
  width: 100%;
  img {
    @apply object-cover;
  }
}
</style>
