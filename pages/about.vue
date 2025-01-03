<script lang="ts" setup>
import AppSocialLinks from '~/components/AppSocialLinks.vue'

const { data, status } = await useAsyncData('about_data', () => queryContent('/').where({ _file: 'bio.md' }).findOne())

useHead({
  title: computed(() => `${data.value?.title || ''}`),
})
</script>

<template>
  <section>
    <div class="py-12 relative mx-auto max-w-2xl px-4 lg:max-w-5xl">
      <div v-if="data">
        <div
          class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
        >
          <ContentRendererMarkdown
            :value="data"
            class="prose dark:prose-invert prose-headings:text-5xl lg:order-first lg:row-span-2"
          />
          <div
            class="order-first aspect-square max-w-xs rotate-3 px-2.5 lg:max-w-none lg:pl-20"
          >
            <NuxtImg
              :src="data.image"
              width="800"
              height="800"
              class="self-start rounded-xl object-contain"
              :modifiers="{ tint: [30, 0, 0] }"
            />
            <AppSocialLinks class="mt-2" />
          </div>
        </div>
      </div>
      <div v-if="status === 'pending'">
        <div
          class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
        >
          <div class="lg:order-first lg:row-span-2 space-y-2">
            <div class="space-y-2">
              <AppSkeleton
                v-for="index in 3"
                :key="index"
                :height="'3em'"
              />
            </div>
            <div>
              <AppSkeleton
                v-for="index in 24"
                :key="index"
              />
            </div>
          </div>
          <div
            class="order-first aspect-square max-w-xs rotate-3 px-2.5 lg:max-w-none lg:pl-20"
          >
            <AppSkeleton
              custom-style
              class="w-full aspect-square"
            />
            <AppSocialLinks class="mt-2" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
