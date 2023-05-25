<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'neutral' | 'pink'
}>(), {
  color: 'neutral',
})

const btnStyles = reactive({
  neutral: 'border-neutral-500 to-neutral-500 text-neutral-500',
  pink: 'border-pink-500 to-pink-500 text-pink-500',
})
</script>

<template lang="pug">
BaseButton(
  class="border-2 border-solid bg-gradient-to-l from-transparent from-50% to-50% bg-[length:200%_100%] bg-[right_center] bg-no-repeat px-4 py-2 hover:bg-[left_center] hover:text-white active:scale-90 current:bg-[left_center] current:text-white"
  :class="btnStyles[color]"
)
  slot
</template>
