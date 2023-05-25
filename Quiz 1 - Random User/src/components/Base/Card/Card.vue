<script setup lang="ts">
defineProps<{
  noShadow?: boolean
}>()
</script>

<template lang="pug">
div(
  class="overflow-hidden rounded-md border border-solid border-neutral-200 bg-white"
  :class="{ 'shadow-md shadow-neutral-300': !noShadow }"
)
  slot
</template>
