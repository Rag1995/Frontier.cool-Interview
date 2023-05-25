<script setup lang="ts">
import { useUserStore } from '@/stores'

const userStore = useUserStore()
const { isFetching, page, per, mode, users } = toRefs(userStore)
</script>

<template lang="pug">
UserDataView(
  v-model:mode="mode"
  v-model:page="page"
  v-model:per="per"
  title="Users"
  :users="users"
  :loading="isFetching"
)/
</template>
