<template>
  <section class="mx-auto mt-8 mt-16 w-full max-w-5xl px-4 sm:mt-32 lg:px-0">
    <header class="max-w-2xl">
      <h1
        class="text-4xl font-bold tracking-tight text-slate-12 dark:text-slate-dark-12 sm:text-5xl"
      >
        Here are some things I am quite proud of
      </h1>
      <p class="mt-6 text-base text-slate-11 dark:text-slate-dark-11">
        I’ve worked on tons of little projects over the years but these are the
        ones that I’m most proud of.
      </p>
    </header>
    <div class="mt-16 mb-28 sm:mt-20">
      <ul
        class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AppProjectCard
          title="Mailjet CI Template"
          description="Template to kickstart sending emails through Mailjet."
          href="https://github.com/lennartzellmer/mailjet-deployment-template"
          readable-url="github.com"
        />
        <AppProjectCard
          title="Thunderstorm Lamp"
          description="An audiovisual fixture brings all of the thunder but none of the rain to our living room."
          href="https://vimeo.com/159278507"
          readable-url="vimeo.com"
        />
        <AppProjectCard
          title="Zufällig Sie?"
          description="Short film that got awarded the jury award by the Zurich Film Festival."
          href="https://www.youtube.com/watch?v=7KYu3g3B0g4"
          readable-url="youtube.com"
        />
        <AppProjectCard
          title="Diskostrand"
          description="My first 1 million views youtube video. Okay - I admit it - it is because of the music."
          href="https://www.youtube.com/watch?v=wlvFyCcoyN0"
          readable-url="youtube.com"
        />
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import AppProjectCard from '~/components/AppProjectCard.vue'
</script>
