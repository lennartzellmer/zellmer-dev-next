<template>
  <NuxtLink
    class="group flex cursor-pointer flex-col py-8 focus:outline-none sm:flex-row"
    :to="'/posts/' + post.uid"
  >
    <div
      class="relative z-20 hidden h-36 w-full shrink-0 overflow-hidden rounded-lg bg-slate-1 transition-all dark:bg-slate-dark-1 sm:flex sm:h-auto sm:w-48 sm:group-hover:w-52 sm:group-focus:w-52"
    >
      <PrismicImage
        :imgix-params="{ fit: 'crop', h: 400, w: 400 }"
        :pixel-densities="[1, 2]"
        :field="post.data.thumbnail"
        class="AppArticlePreview__picture transition-all group-hover:brightness-100 dark:brightness-75"
      />
    </div>
    <article
      class="z-10 mt-6 mb-3 w-full rounded-r-lg transition-all sm:mt-3 sm:py-8 sm:pr-10 sm:pl-8 sm:group-hover:bg-slate-3 sm:group-hover:pr-6 sm:group-hover:pl-8 sm:group-focus:bg-gray-100 sm:group-focus:pr-6 sm:group-focus:pl-8 dark:sm:group-hover:bg-slate-dark-1 dark:sm:group-focus:bg-slate-dark-1"
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
        class="overflow-hidden text-ellipsis text-base leading-7 text-slate-11 dark:text-slate-dark-11"
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
