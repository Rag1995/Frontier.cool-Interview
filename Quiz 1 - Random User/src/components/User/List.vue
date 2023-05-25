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
  BaseCardBody(class="grid grid-cols-[1fr] gap-4 sm:grid-cols-[1fr_120px] sm:gap-8 md:grid-cols-[1fr_1fr_120px] lg:grid-cols-[1fr_1fr_200px]")
    div(class="flex flex-row items-center gap-4")
      UserAvatar(:src="picture.medium")/
      div
        div(class="text-left text-2xl font-bold")
          span(class="line-clamp-2") {{ name.first }} {{ name.last }}
        div(class="flex flex-row items-center gap-2 text-base")
          BaseCountryFlag(:flag="nat" class="shadow-[0_0_0_1px_rgb(0,0,0)] shadow-neutral-300")/
          span(class="line-clamp-1") {{location.country}} {{ location.city }}

    div(class="hidden flex-col justify-center text-neutral-500 md:flex")
      div(class="flex flex-row items-center gap-2")
        span(class="i-ic-baseline-email")
        span {{ email }}
      div(class="flex flex-row items-center gap-2")
        span(class="i-ic-baseline-phone")
        span {{ phone }}
      div(class="flex flex-row items-center gap-2")
        span(class="i-ic-baseline-phone-android")
        span {{ cell }}

    div(class="grid grid-cols-2 gap-2 sm:grid-cols-1")
      UserProfileButton(@click="emit('onClickProfile', props)")/
      UserFavorButton(
        :class="{ active: favor }"
        @click="emit('onClickFavor', props)"
      )/
</template>
