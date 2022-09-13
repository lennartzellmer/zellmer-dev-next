<template>
  <section>
    <div class="bg-slate-2 dark:bg-transparent">
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 167"
        class="h-16 w-full text-slate-3 dark:text-slate-dark-1 md:h-24 lg:h-32"
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
    <div class="bg-slate-3 pt-12 dark:bg-slate-dark-1">
      <div
        v-if="bio"
        class="relative mx-auto max-w-2xl px-4 sm:px-8 lg:max-w-5xl lg:px-0"
      >
        <div
          class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
        >
          <PrismicRichText
            class="prismic-text-dark lg:order-first lg:row-span-2"
            :field="bio.data.bio_text"
          />
          <div
            class="order-first aspect-square max-w-xs rotate-3 px-2.5 lg:max-w-none lg:pl-20"
          >
            <PrismicImage
              :imgix-params="{ fit: 'crop', h: 800, w: 800 }"
              :pixel-densities="[1, 2]"
              :field="bio.data.profile_image"
              class="self-start rounded-xl object-contain"
            />
            <AppSocialLinks class="mt-2" />
          </div>
        </div>
      </div>
      <footer class="mx-auto flex max-w-7xl justify-center py-12">
        <nav v-if="footerNavigation">
          <PrismicLink
            v-for="(linkObject, id) in footerNavigation.data.menu_links"
            :key="id"
            class="p-3 font-mono text-slate-9 transition hover:text-slate-5"
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
import AppSocialLinks from '~/components/AppSocialLinks.vue'

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
    @apply mb-3 text-5xl font-bold text-slate-12 dark:text-slate-dark-12;
  }
  p {
    @apply pt-6 text-base leading-relaxed text-slate-11 dark:text-slate-dark-11;
  }
  a {
    @apply font-mono leading-relaxed text-slate-12 hover:text-slate-11 dark:text-slate-dark-11 dark:hover:text-slate-dark-10;
  }
}
</style>
