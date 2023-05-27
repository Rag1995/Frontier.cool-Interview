<script setup lang="ts">
import {useTreeStore} from '@/stores'

const treeStore = useTreeStore()
const { treeData } = toRefs(treeStore)
const { pairs } = treeStore

</script>

<template lang="pug">
BaseCard()
  template(#title)
    div(class="text-xl font-bold py-1.5") Tree View
  PairTreeItem(
    v-for="(tree, key) in treeData"
    :key="key"
    :tree="tree"
  )
</template>