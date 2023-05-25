<script setup lang="ts">
const props = defineProps<{
  modelValue: any
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:modelValue', v: any): void
}

const input = useVModel(props, 'modelValue', emit)

const perList = reactive([10, 30, 50]) // 每頁筆數選項，預設 [10, 30, 50]
const options = computed(() => {
  return perList.map((item) => {
    return {
      value: item,
      label: `${item} 筆/頁`,
    }
  })
})
</script>

<template lang="pug">
select(v-model="input" class="rounded border border-gray-300 p-2 transition-colors hover:bg-green-500 hover:text-white text-base")
  option(
    v-for="({ label, value }, i) in options"
    :key="i"
    :value="value"
  ) {{ label }}
</template>
