<template>
  <section class="bg-slate-12">
    <div class="pt-12 bg-slate-2">
      <svg
        class="w-full h-16 text-slate-12 md:h-24 lg:h-32"
        viewBox="0 0 1440 166"
        preserveAspectRatio="none"
        height="1440"
        width="166"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 166.709C883.5 150 262.088 58.4152 0 0V166.709H1440Z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div
      v-if="bio"
      class="grid grid-cols-12 mx-auto max-w-5xl sm:pb-24 md:gap-8 md:px-4"
    >
      <div class="flex col-span-10 col-start-2 md:col-span-5 md:col-start-1">
        <PrismicImage
          :imgix-params="{ fit: 'crop', h: 800, w: 800 }"
          :pixel-densities="[1, 2]"
          :field="bio.data.profile_image"
          class="object-contain opacity-100 mix-blend-lighten brightness-105"
        />
      </div>

      <div
        class="flex items-center mt-8 md:col-span-7 md:col-start-auto col-span-10 col-start-2"
      >
        <div class="prismic-text-dark">
          <PrismicRichText :field="bio.data.bio_text" />
        </div>
      </div>
    </div>
    <footer class="flex justify-center py-12 mx-auto max-w-7xl">
      <nav v-if="footerNavigation">
        <PrismicLink
          v-for="(linkObject, id) in footerNavigation.data.menu_links"
          :key="id"
          class="p-3 font-mono text-slate-9 hover:text-slate-5 transition"
          :field="linkObject.link"
          :link-resolver="linkResolver"
        >
          {{ asText(linkObject.label) }}
        </PrismicLink>
      </nav>
    </footer>
  </section>
</template>

<script lang="ts" setup>
import { asText } from '@prismicio/helpers'
import linkResolver from '@/helper/linkResolver'
import { useAsyncData } from '#imports'

const { client } = usePrismic()
const { data: footerNavigation } = useAsyncData('footerNavigation', () =>
  client.getSingle('footer_navigation')
)

const { data: bio } = useAsyncData('bio', () => client.getSingle('bio'))
</script>

<style lang="scss">
.prismic-text-dark {
  h3 {
    @apply text-slate-6 font-bold text-3xl mb-3;
  }
  p {
    @apply text-slate-10 leading-relaxed pb-6;
  }
  a {
    @apply text-slate-8 underline hover:text-slate-5 leading-relaxed font-mono;
  }
}
</style>
