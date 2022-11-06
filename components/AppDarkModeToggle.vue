<template>
  <RadioGroup
    v-model="$colorMode.preference"
    class="flex flex-initial cursor-pointer rounded-full ring-2 ring-slate-12 dark:ring-slate-dark-7"
  >
    <RadioGroupLabel class="sr-only">
      Dark mode
    </RadioGroupLabel>
    <RadioGroupOption
      v-slot="{ active, checked }"
      value="light"
      class="group focus:outline-none"
    >
      <RadioGroupLabel
        class="rounded-l-full hover:text-slate-12 focus:z-40 focus:outline-none hover:dark:text-slate-dark-12"
      >
        <PhSun
          class="h-auto w-9 p-2 pl-3 transition-colors"
          :class="[
            checked
              ? 'text-slate-12'
              : 'text-slate-9 hover:text-slate-12 dark:text-slate-dark-9 dark:hover:text-slate-dark-12',
            active ? 'rounded-full bg-slate-4' : '',
          ]"
        />
        <p class="sr-only">
          Light
        </p>
      </RadioGroupLabel>
    </RadioGroupOption>
    <RadioGroupOption
      v-slot="{ active, checked }"
      value="dark"
      class="group focus:outline-none"
    >
      <RadioGroupLabel class="focus:z-40 focus:outline-none">
        <PhMoonStars
          class="h-auto w-9 p-2 pr-3 transition-colors sm:w-8 sm:pr-2"
          :class="[
            checked
              ? 'text-white'
              : 'text-slate-9 hover:text-slate-12 dark:text-slate-dark-11 hover:dark:text-slate-dark-12',
            active ? 'rounded-full bg-slate-dark-4' : '',
          ]"
        />
        <p class="sr-only">
          Dark
        </p>
      </RadioGroupLabel>
    </RadioGroupOption>
    <RadioGroupOption
      v-slot="{ active, checked }"
      value="system"
      class="group hidden focus:outline-none sm:flex"
    >
      <RadioGroupLabel
        class="rounded-r-full hover:text-slate-12 focus:z-40 focus:outline-none hover:dark:text-slate-dark-12"
      >
        <PhDesktop
          class="h-auto w-9 p-2 pr-3 transition-colors"
          :class="[
            checked
              ? 'text-slate-12 dark:text-slate-dark-12'
              : 'text-slate-9 hover:text-slate-12 dark:text-slate-dark-9 dark:hover:text-slate-dark-12',
            active ? 'rounded-full bg-slate-4 dark:bg-slate-dark-4' : '',
          ]"
        />
        <p class="sr-only">
          System
        </p>
      </RadioGroupLabel>
    </RadioGroupOption>
  </RadioGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PhMoonStars from 'virtual:icons/ph/moon-stars-bold'
import PhSun from 'virtual:icons/ph/sun-bold'
import PhDesktop from 'virtual:icons/ph/desktop-bold'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

export default defineComponent({
  components: {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    PhMoonStars,
    PhSun,
    PhDesktop
  }
})
</script>
