<script setup lang="ts">
import type { User } from '@/types'
import {useUserStore } from '@/stores'


const props = defineProps<{
  modelValue: boolean
  userId?: string
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'onClickFavor', v: User | null): void
  (e: 'update:modelValue', value: boolean): void
}

const userStore = useUserStore()
const { users } = toRefs(userStore)
const user = computed(() => {
  return users.value.find((user) => user.login.uuid === props.userId)
})

const show = useVModel(props, 'modelValue', emit)
const toggle = useToggle(show)
</script>

<template lang="pug">
BaseModal(v-model="show" class="relative max-w-[560px] w-full mx-auto")
  BaseCard(v-if="user && userId" no-shadow)
    BaseButton(
      class="absolute right-0 top-0 ml-auto p-3 text-2xl text-red-500/75 hover:text-red-500"
      @click="toggle(false)"
    )
      span(class="i-mdi-close-thick")

    BaseCardBody(class="flex flex-col items-center gap-6")
      UserAvatar(:src="user.picture.medium ")/

      div
        div(class="text-center text-2xl font-bold")
          span {{ user.name.first }} {{ user.name.last }}
        div(class="flex flex-row items-center justify-center gap-2 text-base")
          BaseCountryFlag(:flag="user.nat " class="shadow-[0_0_0_1px_rgb(0,0,0)] shadow-neutral-300")/
          span(class="line-clamp-1") {{ user.location.country }} {{ user.location.city }}

      div(class="text-neutral-500")
        div(class="mb-2 flex flex-row items-center justify-center gap-2")
          span(class="i-ic-baseline-email")
          span {{ user.email }}
        div(class="flex flex-row items-center justify-center gap-2")
          span(class="i-ic-baseline-phone")
          span {{ user.phone }}
        div(class="flex flex-row items-center justify-center gap-2")
          span(class="i-ic-baseline-phone-android")
          span {{ user.cell }}

      UserFavorButton(
        class="w-full max-w-[150px]"
        :class="{ active: user.favor }"
        @click="emit('onClickFavor', user ?? null)"
      )/
</template>
