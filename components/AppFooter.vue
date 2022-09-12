<template>
  <section>
    <div class="bg-slate-2 dark:bg-transparent">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 167"
        class="w-full h-16 md:h-24 lg:h-32 text-slate-3 dark:text-slate-dark-1"
        preserveAspectRatio="none"
      >
        <path
          d="M1440 167.709C883.5 151 262.088 59.415 0 1v166.709h1440Z"
          fill="currentColor"
        />
        <path
          d="M1440 167.709C883.5 151 262.088 59.415 0 1"
          class="stroke-slate-6 dark:stroke-slate-dark-3"
          stroke-linecap="round"
        />
      </svg>
    </div>
    <div class="bg-slate-3 dark:bg-slate-dark-1 pt-12">
      <div
        v-if="bio"
        class="grid grid-cols-12 mx-auto max-w-5xl sm:pb-24 md:gap-16 md:px-4 mt-8"
      >
        <div
          class="flex items-center md:col-span-7 md:col-start-auto col-span-10 col-start-2"
        >
          <div class="prismic-text-dark">
            <PrismicRichText :field="bio.data.bio_text" />
          </div>
        </div>
        <div class="flex col-span-10 md:col-span-5 rotate-3">
          <PrismicImage
            :imgix-params="{ fit: 'crop', h: 800, w: 800 }"
            :pixel-densities="[1, 2]"
            :field="bio.data.profile_image"
            class="object-contain opacity-100 bg-black rounded-xl self-start"
          />
        </div>
      </div>
      <footer class="flex justify-center py-12 mx-auto max-w-7xl">
        <nav v-if="footerNavigation">
          <PrismicLink
            v-for="(linkObject, id) in footerNavigation.data.menu_links"
            :key="id"
            class="p-3 font-mono text-slate-9 hover:text-slate-5 transition"
            :field="linkObject.link"
          >
            {{ asText(linkObject.label) }}
          </PrismicLink>
        </nav>
      </footer>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useAsyncData, usePrismic } from '#imports'

const { client, asText } = usePrismic()
const { data: footerNavigation } = useAsyncData('footerNavigation', () =>
  client.getSingle('footer_navigation', { lang: 'en-eu' })
)

const { data: bio } = useAsyncData('bio', () =>
  client.getSingle('bio', { lang: 'en-eu' })
)
</script>

<style lang="scss">
.prismic-text-dark {
  h3 {
    @apply text-slate-12 font-bold text-5xl mb-3 dark:text-slate-dark-12;
  }
  p {
    @apply text-slate-10 leading-relaxed pt-6 dark:text-slate-dark-10;
  }
  a {
    @apply text-slate-12 dark:text-slate-dark-11 dark:hover:text-slate-dark-10 hover:text-slate-11 leading-relaxed font-mono;
  }
}
</style>
