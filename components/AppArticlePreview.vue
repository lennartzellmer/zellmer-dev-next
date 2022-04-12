<template>
  <NuxtLink
    class="group flex overflow-hidden flex-col rounded-lg focus:outline-none cursor-pointer sm:flex-row"
    :to="'/posts/' + post.uid"
  >
    <div
      class="flex overflow-hidden relative z-20 shrink-0 w-full h-36 bg-gray-400 rounded-lg transition-all sm:w-48 sm:group-hover:w-52 sm:group-focus:w-52 sm:h-auto"
    >
      <PrismicImage
        :imgix-params="{ fit: 'crop', h: 400, w: 400 }"
        :pixel-densities="[1, 2]"
        :field="post.data.thumbnail"
        class="AppArticlePreview__picture dark:brightness-75 group-hover:brightness-100 transition-all"
      />
    </div>
    <article
      class="z-10 mt-6 mb-3 w-full rounded-r-lg transition-all sm:py-8 sm:pr-10 sm:group-hover:pr-6 sm:group-focus:pr-6 sm:pl-8 sm:group-hover:pl-8 sm:group-focus:pl-8 sm:mt-3 sm:group-hover:bg-slate-3 dark:sm:group-hover:bg-slate-dark-1 sm:group-focus:bg-gray-100 dark:sm:group-focus:bg-slate-dark-1"
    >
      <span class="font-mono text-sm text-slate-11 dark:text-slate-dark-11">
        {{ formattedDate }}
      </span>
      <h2
        class="mb-3 text-2xl font-bold text-slate-12 dark:text-slate-dark-12 sm:text-2xl"
      >
        {{ $prismic.asText(post.data.headline) }}
      </h2>
      <p
        class="overflow-hidden text-base leading-7 text-slate-11 dark:text-slate-dark-11 text-ellipsis"
      >
        {{ $prismic.asText(post.data.description) }}
      </p>
    </article>
  </NuxtLink>
</template>

<script type="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup({ post }) {
    const formattedDate = new Date(
      post.first_publication_date
    ).toLocaleDateString('en-EN', {
      year: 'numeric',
      month: 'long',
    })
    return { formattedDate }
  },
})
</script>

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
