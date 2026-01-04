<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
function getRotateClass(index: number) {
  const classes = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ]
  return classes[index % classes.length]
}

function getYearsAtElvah(): string {
  const startDate = new Date('2017-01-15')
  const now = new Date()
  const diffInMs = now.getTime() - startDate.getTime()
  const yearsDecimal = diffInMs / (1000 * 60 * 60 * 24 * 365.25)
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(yearsDecimal)
}

const images = [
  '/header_2.jpeg',
  '/header_3.jpeg',
  '/header_5.png',
  '/header_4.jpeg',
  '/header_1.jpeg',
]
</script>

<template>
  <section>
    <div
      class="mx-auto mt-20 px-4 md:mt-28 max-w-5xl"
    >
      <div class="flex max-w-2xl flex-col">
        <h1
          class="text-3xl leading-tight dark:text-slate-dark-12 md:text-5xl text-slate-12 font-bold"
        >
          Product Builder and Tinkerer
        </h1>
        <h2
          class="mt-6 text-base leading-7 text-slate-11 dark:text-slate-dark-11"
        >
          I am Lennart. A product owner, father of three, master of science, geek, tech enthusiast, programmer, tinkerer and creator. I have been working at elvah for {{ getYearsAtElvah() }} years now making EV charging effortless.
        </h2>
        <AppSocialLinks class="mt-4" />
      </div>
    </div>
    <div
      class="mt-16 sm:mt-24"
    >
      <div
        class="-my-4 flex justify-center gap-5 py-4 sm:gap-8"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="getRotateClass(index)"
          class="relative flex aspect-[9/10] shadow-putiful-close hover:scale-[104%] duration-300 ring-4 ring-white/20 dark:ring-white/5 hover:rotate-0 transition-all hover:shadow-putiful w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
        >
          <NuxtPicture
            alt="Portrait Lennart"
            :src="image"
            height="330"
            width="300"
            :img-attrs="{ class: 'object-cover' }"
            class="flex w-full object-cover"
            sizes="xs:150px sm:300px xl:500px"
            :modifiers="{ tint: '#1B3151' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>
