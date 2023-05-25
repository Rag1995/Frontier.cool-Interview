<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  icon: string
  label: string
}>()
</script>

<template lang="pug">
a(class="flex flex-row items-center gap-2 text-2xl opacity-50  transition-opacity duration-300 ease-in-out hover:opacity-100 current:opacity-100 current:border-b-2 md:text-xl")
  span(class="text-icon" :class="icon")
  span(class="hidden md:flex") {{ label }}
</template>
