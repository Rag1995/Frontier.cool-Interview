<script setup lang="ts">
const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
</script>

<template lang="pug">
NavbarItem(type="button" @click="toggleDark()")
  span(class="i-ic-round-dark-mode" v-if="isDark")
  span(class="i-ic-round-wb-sunny" v-else)
</template>
