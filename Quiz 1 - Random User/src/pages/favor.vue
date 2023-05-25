<script setup lang="ts">
import { useFavorStore } from '@/stores'

const favorStore = useFavorStore()
const { page, per, mode, favor } = toRefs(favorStore)
</script>

<template lang="pug">
UserDataView(
  v-model:mode="mode"
  v-model:page="page"
  v-model:per="per"
  title="Favor Users"
  :users="favor"
) /
</template>
