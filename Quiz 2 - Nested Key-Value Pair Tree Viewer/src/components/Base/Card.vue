<template lang="pug">
div(class="border-base rounded")
  div(class="px-6 py-4 border-base border-0 border-b")
    slot(name="title")
  div(class="px-6 py-4 overflow-y-scroll")
    slot
</template>