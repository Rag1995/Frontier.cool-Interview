<script setup lang="ts">
import { Mode } from '@/types'
import type { User } from '@/types'
import { useUserStore } from '@/stores'

const props = defineProps<{
  title: string
  mode: Mode
  page: number
  per: number
  users: User[]
  loading?: boolean
}>()

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:mode', v: Mode): void
  (e: 'update:page', v: number): void
  (e: 'update:per', v: number): void
}

const mode_ = useVModel(props, 'mode', emit)
const page_ = useVModel(props, 'page', emit)
const per_ = useVModel(props, 'per', emit)

const userStore = useUserStore()
const { favorId } = toRefs(userStore)

const total = computed(() => props.users.length)
const totalPage = computed(() => {
  return Math.ceil(total.value / props.per)
})
const rows = computed(() => {
  const start = (page_.value - 1) * props.per
  const end = start + props.per
  return [...props.users].slice(start, end)
})

const onClickFavor = (user: User | null) => {
  if (!user) return
  if (user.favor) {
    const index = favorId.value.findIndex((id) => id === user.login.uuid)
    favorId.value.splice(index, 1)
  }
  else {
    favorId.value.push(user.login.uuid)
  }
}
const [showModal, toggle] = useToggle()
const userId = ref<string>()
const onClickProfile = (user: User) => {
  userId.value = user.login.uuid
  toggle(true)
}

watch(page_, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template lang="pug">
UserProfileModal(
  v-model="showModal"
  :userId="userId"
  @on-click-favor="onClickFavor($event)"
)/

div(class="container mx-auto px-4 py-8")
  h1(class="mb-4 text-center text-3xl font-bold") {{ title }}

  Transition(
    enter-from-class="opacity-0"
    enter-active-class="transition ease-out duration-300"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-active-class="z-10 absolute inset-x-0 transition ease-in duration-300"
    leave-to-class="opacity-0"
    tag="div"
    class="relative"
  )
    div(
      v-if="total === 0"
      class="flex justify-center py-32 text-center text-2xl font-bold text-gray-400"
    )
        BaseLoader(v-if="loading")/
        span(v-else) No Data

    div(v-else)
      div(class="text-center") 第 {{ page_ }} 頁
      div(class="mb-2 flex flex-col sm:flex-row items-center justify-between gap-2")
        div 總共 {{ total }} 筆資料 / {{ totalPage }} 頁
        div(class="flex items-center gap-4")
          FormPerPageSelect(v-model="per_")
          FormModeSelect(v-model="mode_")/

      TransitionGroup(
        enter-from-class="opacity-0 scale-0 translate-x-30px"
        enter-active-class="transition ease-out duration-300"
        enter-to-class
        leave-from-class
        leave-active-class="absolute transition ease-in duration-300"
        leave-to-class="opacity-0 scale-0 translate-x-30px"
        tag="div"
        class="relative mb-8"
        :class="{ 'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4': mode_ === Mode.CARD, 'grid grid-cols-1 gap-4': mode_ === Mode.LIST }"
      )
        template(v-for="user in rows" :key="user.login.uuid")
          UserCard(
            v-if="mode_ === Mode.CARD"
            v-bind="user"
            @on-click-favor="onClickFavor($event)"
            @on-click-profile="onClickProfile($event)"
          )/
          UserList(
            v-else-if="mode_ === Mode.LIST"
            v-bind="user"
            @on-click-favor="onClickFavor($event)"
            @on-click-profile="onClickProfile($event)"
          )/

      BasePagination(
        v-model="page_"
        :total-page="totalPage"
      )/
</template>
