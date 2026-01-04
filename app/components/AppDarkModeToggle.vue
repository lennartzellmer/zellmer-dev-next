<script lang="ts" setup>
const options = [
  { label: 'Light', value: 'light', icon: 'ph:sun' },
  { label: 'Dark', value: 'dark', icon: 'ph:moon' },
  { label: 'System', value: 'system', icon: 'ph:computer-tower' },
]
</script>

<template>
  <ColorScheme
    tag="span"
  >
    <ToggleGroupRoot
      v-model="$colorMode.preference"
      class="flex text-slate-11 dark:text-slate-dark-11 border-slate-5 dark:border-slate-dark-6 border-2 rounded-full overflow-hidden"
    >
      <ToggleGroupItem
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        class="flex items-center data-[state=on]:bg-slate-3 dark:data-[state=on]:bg-slate-dark-3 py-2 first:pl-3 first:pr-2 last:pl-2  last:pr-3 px-2 justify-center hover:bg-slate-3 dark:hover:bg-slate-dark-3"
      >
        <Icon
          :name="option.icon"
          class="size-4 block"
        />
        <span class="sr-only">
          {{ option.label }}
        </span>
      </ToggleGroupItem>
    </ToggleGroupRoot>
  </ColorScheme>
</template>
