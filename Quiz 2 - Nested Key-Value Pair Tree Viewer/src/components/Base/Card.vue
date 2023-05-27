<template lang="pug">
div(class="border-base rounded flex flex-col")
  div(class="px-6 py-4 border-base border-0 border-b")
    slot(name="title")
  div(class="grow px-6 py-4 overflow-scroll")
    slot
</template>