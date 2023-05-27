<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

const show = useVModel(props, 'modelValue', emit)

const height = ref('0px')
const setHeight = (e: Element) => {
  height.value = `${e.scrollHeight}px`
}

const attrs = useAttrs()
</script>

<template>
  <Transition
    enter-from-class="h-0"
    enter-active-class="transition-all overflow-hidden"
    enter-to-class="h-[var(--collapse-height)]"
    leave-from-class="h-[var(--collapse-height)]"
    leave-active-class="transition-all overflow-hidden"
    leave-to-class="h-0"
    @enter="setHeight"
    @before-leave="setHeight"
  >
    <div v-if="show" ref="el" v-bind="attrs" :style="{
      '--collapse-height': height
    }">
      <slot></slot>
    </div>
  </Transition>
</template>
