<template>
  <section>
    <div class="py-12">
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
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useAsyncData, usePrismic } from '#imports'
import AppSocialLinks from '~/components/AppSocialLinks.vue'

const { client } = usePrismic()

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
