<script setup lang="ts">
const props = defineProps<{
  flag: string
  fis?: boolean
}>()

const classList = computed(() => {
  const { flag, fis } = props
  return {
    [`fi-${flag.toLowerCase()}`]: flag.toLowerCase(),
    fis,
  }
})
</script>

<template lang="pug">
//- eslint-disable tailwindcss/no-custom-classname
span(
  class="fi"
  :class="classList"
)
</template>
