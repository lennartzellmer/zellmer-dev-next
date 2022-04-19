<template>
  <RadioGroup
    v-model="$colorMode.preference"
    class="flex flex-initial cursor-pointer"
  >
    <RadioGroupLabel class="sr-only">Dark mode</RadioGroupLabel>
    <RadioGroupOption
      v-slot="{ active, checked }"
      value="light"
      class="focus:outline-none group"
    >
      <div
        class="focus:z-40 hover:text-slate-12 hover:dark:text-slate-dark-12 rounded-l-full border-y-2 border-l-2 border-slate-12 dark:border-slate-dark-7 focus:outline-none"
      >
        <PhSun
          class="p-2 pl-3 w-9 h-auto transition-colors"
          :class="[
            checked
              ? 'text-slate-12'
              : 'text-slate-9 dark:text-slate-dark-9 hover:text-slate-12 dark:hover:text-slate-dark-12',
            active ? 'bg-slate-4 rounded-full' : '',
          ]"
        />
      </div>
    </RadioGroupOption>
    <RadioGroupOption
      v-slot="{ active, checked }"
      value="dark"
      class="focus:outline-none group"
    >
      <div
        class="focus:z-40 border-y-2 border-slate-12 dark:border-slate-dark-7 focus:outline-none"
      >
        <PhMoonStars
          class="p-2 w-8 h-auto transition-colors"
          :class="[
            checked
              ? 'text-white'
              : 'text-slate-9 dark:text-slate-dark-11 hover:text-slate-12 hover:dark:text-slate-dark-12',
            active ? 'bg-slate-dark-4 rounded-full' : '',
          ]"
        />
      </div>
    </RadioGroupOption>
    <RadioGroupOption
      v-slot="{ active, checked }"
      value="system"
      class="focus:outline-none group"
    >
      <div
        class="focus:z-40 hover:text-slate-12 hover:dark:text-slate-dark-12 rounded-r-full border-y-2 border-r-2 border-slate-12 dark:border-slate-dark-7 focus:outline-none"
      >
        <PhDesktop
          class="p-2 pr-3 w-9 h-auto transition-colors"
          :class="[
            checked
              ? 'text-slate-12 dark:text-slate-dark-12'
              : 'text-slate-9 dark:text-slate-dark-9 hover:text-slate-12 dark:hover:text-slate-dark-12',
            active ? 'bg-slate-4 dark:bg-slate-dark-4 rounded-full' : '',
          ]"
        />
      </div>
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
    PhDesktop,
  },
})
</script>
