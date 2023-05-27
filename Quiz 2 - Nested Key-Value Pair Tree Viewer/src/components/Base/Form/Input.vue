<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (event: 'update:modelValue', value: string): void
}

const input = useVModel(props, 'modelValue', emit)
</script>

<template lang="pug">
input(v-model="input" class="w-full bg-transparent border-base rounded py-2 px-4 leading-normal focus:outline-none focus:ring-4 dark:focus:ring-primary-dark/80 focus:ring-primary/90 transition text-md")
</template>
