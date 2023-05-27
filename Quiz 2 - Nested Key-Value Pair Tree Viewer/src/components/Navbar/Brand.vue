<template lang="pug">
RouterLink(
  :to="{ name: 'index' }"
  class="flex items-center justify-center gap-2 text-3xl"
)
  img(src="@/assets/images/logo.png" class="h-[1.5em] w-[1.5em]")
  span(class="line-clamp-1") Quiz 2 - Nested Key-Value Pair Tree Viewer
</template>
