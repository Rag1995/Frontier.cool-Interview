<script setup lang="ts">
import type { ColorVariant} from '@/types'
const props = defineProps<{
  variant?: ColorVariant
}>()


const styles = computed(() => {
  if (!props.variant) return 'opacity-75 hover:opacity-100'
  
  const styles: Record<ColorVariant, string> = {
    'success': 'bg-green-500 dark:bg-green-500 text-white active:ring-4 ring-green-500/50 dark:ring-gree-500/50 hover:bg-green-600',
    'danger': 'bg-red-500 dark:bg-red-500 text-white active:ring-4 ring-red-500/50 dark:ring-red-500/50 hover:bg-red-600',
    'warning': '',
    'info': 'bg-sky-500 dark:bg-sky-500 text-white active:ring-4 ring-sky-500/50 dark:ring-sky-500/50 hover:bg-sky-600',
  }
  return styles[props.variant]
})

</script>



<template lang="pug">
button(class="flex flex-row flex-nowrap items-center gap-1 px-4 py-2 rounded transition-all active:scale-95" :class="styles")
  slot
</template>
