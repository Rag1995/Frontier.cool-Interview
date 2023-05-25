<script setup lang="ts">
const props = defineProps<{
  modelValue: any
  value: any
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:modelValue', v: any): void
}

const input = useVModel(props, 'modelValue', emit)

const instance = getCurrentInstance()
const uid = ref(`${instance?.uid}`)
</script>

<template lang="pug">
label(
  :for="uid"
  :class="{ active: input === value }"
  class="flex cursor-pointer items-center justify-center rounded border border-gray-300 p-2 transition-colors current:bg-green-500 current:text-white"
)
  input(
    :id="uid"
    v-model="input"
    :value="value"
    type="radio"
    class="absolute h-[1px] w-[1px] overflow-hidden opacity-0"
  )
  slot
</template>
