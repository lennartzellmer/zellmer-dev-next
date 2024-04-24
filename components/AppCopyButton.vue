<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'

interface Props {
  textToCopy: string
}

defineProps<Props>()

const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div v-if="isSupported">
    <button
      class=" border-slate-dark-7 bg-slate-dark-5 text-slate-dark-11 hover:text-slate-dark-12 rounded border size-10 hover:bg-slate-dark-6 transition-colors"
      @click="copy(textToCopy)"
    >
      <span v-if="!copied">
        <Icon
          name="ph:copy"
        />
        <span class="sr-only">Copy</span>
      </span>
      <span v-else>
        <Icon
          name="ph:check-square-offset"
        />
        <span class="sr-only">Copied</span>
      </span>
    </button>
  </div>
</template>
