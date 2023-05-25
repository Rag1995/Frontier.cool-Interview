<script setup lang="ts">
import { Mode } from '@/types'

const props = defineProps<{
  modelValue: any
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:modelValue', v: any): void
}

const input = useVModel(props, 'modelValue', emit)
</script>

<template lang="pug">
div(class="flex items-stretch justify-center gap-2")
  BaseRadio(v-model="input" :value="Mode.LIST")
    span(class="i-ic-twotone-format-list-bulleted m-[2.5px]")
  BaseRadio(v-model="input" :value="Mode.CARD")
    span(class="i-ic-round-apps m-[2.5px]")
    
</template>
