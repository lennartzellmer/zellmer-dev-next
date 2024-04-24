<script lang="ts" setup>
import { components } from '~/slices'

const { client } = usePrismic()
const route = useRoute()

const { data: page } = await useAsyncData(route.params.uid.toString(), () =>
  client.getByUID('default_page', route.params.uid.toString(), {
    lang: 'en-eu',
  }),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Meh, this page might used to exists... but now it is gone. Nothing is forever.' })
}

useHead({
  title: computed(() => `${page.value?.data.meta_title || ''}`),
})
</script>

<template>
  <main class="bg-slate-2 dark:bg-transparent">
    <section
      v-if="page"
      class="mx-auto max-w-5xl grid-cols-12 gap-8 px-4 pt-12 sm:grid sm:px-6 lg:px-4"
    >
      <div class="prismic-text col-span-7 pb-12">
        <SliceZone
          wrapper="article"
          :slices="page?.data.slices as any"
          :components="components"
        />
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.prismic-text {
  h1 {
    @apply mb-3 mt-12 text-5xl font-bold text-slate-12 dark:text-slate-dark-12;
  }

  h3 {
    @apply mb-3 mt-12 text-2xl font-semibold text-slate-12 dark:text-slate-dark-12;
  }

  p {
    @apply leading-relaxed text-slate-11 dark:text-slate-dark-11;
  }

  a {
    @apply font-mono leading-relaxed text-slate-8 underline hover:text-slate-5 dark:text-slate-dark-8;
  }
}
</style>
