<script setup lang="ts">
const props = defineProps<{
  path: string
  value: string
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (event: 'update:path', value: string): void
  (event: 'update:value', value: string): void
  (event: 'remove'): void
}

const path_ = useVModel(props, 'path', emit)
const value_ = useVModel(props, 'value', emit)
</script>

<template lang="pug">
div(class="flex flex-row flex-nowrap gap-4")
  BaseFormInput(
    v-model="path_"
    placeholder="key"
    class="grow shrink"
  )
  BaseFormInput(
    v-model="value_"
    placeholder="value"
    class="grow shrink"
  )
  BaseButton(
    variant="danger"
    class="shrink-0"
    @click="emit('remove')"
  )
    span(class="i-ic-round-minus")
</template>