<script setup lang="ts">
import { useTreeStore } from '@/stores'

const treeStore= useTreeStore()
const { pairs, addPair, removePair } = treeStore
</script>

<template lang="pug">
BaseCard(class="flex flex-col")
  template(#title)
    BaseButton(
      class="ml-auto"
      variant="success"
      @click="addPair()"
    )
      span(class="i-ic-round-plus")
      span Add New Pair
    
  div(v-if="pairs.length > 0" class="flex flex-col gap-2")
    TransitionGroup(
      enter-from-class="translate-x-[30px] scale-y-0 opacity-0"
      enter-active-class="transition overflow-hidden"
      enter-to-class=""
      leave-from-class=""
      leave-active-class="transition overflow-hidden duration-300"
      leave-to-class="translate-x-[-30px] scale-y-0 opacity-0"
    )
      PairInput(
        v-for="(pair, index) in pairs"
        :key="pair.id"
        v-model:path="pair.path"
        v-model:value="pair.value"
        @remove="removePair(index)"
      )
</template>