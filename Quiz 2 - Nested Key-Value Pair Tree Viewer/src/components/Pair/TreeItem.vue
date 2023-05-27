<script setup lang="ts">
import type { Tree } from '@/types'

const props = withDefaults(defineProps<{
  tree: Tree
  level?: number
}>(), {
  level: 0
})

const [show, toggle] = useToggle()
const hasChildren = computed(() => {
  return (props.tree.children ?? []).length > 0
})

</script>

<template lang="pug">
div
  a(type="button" class="block px-4 py-3 hover:bg-sky-200 dark:hover:bg-sky-800 cursor-pointer transition border-b border-gray-300 dark:border-gray-700" @click="toggle()")
    div(
      class="pl-[var(--node-level)] flex flex-row items-center gap-1"
      :style="{'--node-level': `${level}rem`}"
    )
      div(
        class="flex flex-row items-center"
        :class="{ invisible: !hasChildren }"
      )
        span(v-if="show" class="i-ic-round-keyboard-arrow-down")
        span(v-else class="i-ic-round-keyboard-arrow-right")
      span {{ tree.name }}
      template(v-if="!hasChildren")
        span(class="mr-1") :
        span(class="font-bold text-primary dark:text-primary-dark") {{ tree.value }}

  template(v-if="hasChildren")
    BaseCollapse(v-model="show")
      TreeItem(
        v-for="(child, index) in tree.children"
        :key="index"
        :tree="child"
        :level="level+1"
      ) {{child}}

</template>
