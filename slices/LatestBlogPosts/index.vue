<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const { client } = usePrismic()
const { data: posts } = useAsyncData('blog-posts-preview', () =>
  client.getByType('blog-post', {
    lang: 'en-eu',
    pageSize: 6,
    orderings: [
      { field: 'document.first_publication_date', direction: 'desc' },
    ],
  }))

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps([
    'slice',
    'index',
    'slices',
    'context',
  ]),
)
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="mx-auto mt-4 max-w-5xl px-4 sm:mt-8 md:mt-28"
  >
    <ul
      v-if="posts"
      class=""
    >
      <li
        v-for="post in posts.results.slice(0, 3)"
        :key="post.id"
        class="border-b border-slate-4 last:border-0 dark:border-slate-dark-2"
      >
        <AppArticlePreview :post="post" />
      </li>
      <li>
        <NuxtLink
          class="group flex cursor-pointer flex-row items-center py-8 focus:outline-none"
          to="/articles"
        >
          <div
            v-for="post in posts.results.slice(3, posts.results.length)"
            :key="post.id"
            class="relative z-20 -mr-6 flex h-auto w-12 shrink-0 overflow-hidden rounded-xl bg-slate-6 shadow-md ring ring-slate-1 transition-all dark:bg-slate-dark-6 dark:ring-slate-dark-4 sm:-mr-8 sm:w-16 sm:group-hover:-mr-7"
          >
            <PrismicImage
              :imgix-params="{ fit: 'crop', h: 64, w: 64 }"
              :pixel-densities="[1, 2]"
              :field="post.data.thumbnail"
              :img-attrs="{ class: 'object-cover' }"
              class="flex w-full object-cover"
              height="64"
              width="64"
            />
          </div>
          <span
            class="ml-8 flex items-center space-x-1 rounded-lg px-3 py-3 text-green-500 group-hover:bg-slate-3 dark:group-hover:bg-slate-dark-1 sm:ml-12 sm:px-4"
          >
            <p>See more articles</p>
            <Icon
              name="ph:caret-right-bold"
              class="h-auto w-4"
            />
          </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
