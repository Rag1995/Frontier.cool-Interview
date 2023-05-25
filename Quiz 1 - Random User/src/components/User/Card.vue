<script setup lang="ts">
import type { User } from '@/types'

const props = defineProps<User>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'onClickFavor', v: User): void
  (e: 'onClickProfile', v: User): void
}
</script>

<template lang="pug">
BaseCard
  BaseCardBody(class="flex flex-col items-center gap-6")
    UserAvatar(:src="picture.medium")/

    div
      div(class="text-center text-2xl font-bold")
        span {{ name.first }} {{ name.last }}
      div(class="flex flex-row items-center justify-center gap-2 text-base")
        BaseCountryFlag(:flag="nat" class="shadow-[0_0_0_1px_rgb(0,0,0)] shadow-neutral-300")/
        span(class="line-clamp-1") {{location.country}} {{ location.city }}

    div(class="text-neutral-500")
      div(class="mb-2 flex flex-row items-center justify-center gap-2")
        span(class="i-ic-baseline-email")
        span {{ email }}
      div(class="flex flex-row items-center justify-center gap-2")
        span(class="i-ic-baseline-phone")
        span {{ phone }}
      div(class="flex flex-row items-center justify-center gap-2")
        span(class="i-ic-baseline-phone-android")
        span {{ cell }}

  BaseCardBody(class="grid grid-cols-2 gap-2")
    UserProfileButton(@click="emit('onClickProfile', props)")/
    UserFavorButton(
      :class="{ active: favor }"
      @click="emit('onClickFavor', props)"
    )/
</template>
