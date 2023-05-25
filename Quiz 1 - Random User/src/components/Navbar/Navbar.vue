<script setup lang="ts">
const links = reactive([
  {
to: { name: 'index' },
icon: 'i-fa6-solid-users',
label: 'ALL'
  },
  {
    to: { name: 'favor' },
    icon: 'i-mdi-heart',
    label: 'Favor'
  },
])

</script>



<template lang="pug">
nav(class="flex items-center justify-start gap-8 bg-gray-800 px-6 py-4 text-white ")
  RouterLink(
    :to="{ name: 'index' }"
    class="flex items-center justify-center gap-2 text-2xl"
  )
    img(src="@/assets/images/logo.png" class="h-[1.5em] w-[1.5em]")
    span(class="line-clamp-1") Quiz 1 - Random User

  div(class="ml-auto flex items-center gap-4")
    RouterLink(
      v-for="({to,icon,label}, _i) in links"
      :key="_i"
      :to="to"
      custom
      v-slot="{ href, isExactActive }"
    )
      NavbarItem(
        :href="href"
        :class="{ active: isExactActive }"
        :icon="icon"
        :label="label"
      )/
    NavbarItem(
      href="https://www.google.com.tw/"
      target="_blank"
      icon="i-mdi-github"
      label="GitHub"
    )/
</template>
