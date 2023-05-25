<script setup lang="ts">
// Pagination 參考：
// https://www.digitalocean.com/community/tutorials/vuejs-vue-pagination-component
const props = withDefaults(defineProps<{
  modelValue: number
  totalPage?: number
  maxVisibleButtons?: number
}>(), {
  per: 1,
  totalPage: 0,
  maxVisibleButtons: 7,
})

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update:page', value: number): void
}
const currentPage = useVModel(props, 'modelValue', emit)

const isFirstPage = computed(() => currentPage.value === 1)
const isLastPage = computed(() => currentPage.value === props.totalPage)
// const next = () => {
//   if (!isLastPage.value)
//     currentPage.value++
// }
// const prev = () => {
//   if (!isFirstPage.value)
//     currentPage.value--
// }

const startPage = computed(() => {
  const offset = Math.floor(props.maxVisibleButtons / 2)
  if (currentPage.value <= offset + 1)
    return 1

  if (currentPage.value >= (props.totalPage - offset))
    return props.totalPage - props.maxVisibleButtons + 1

  return currentPage.value - offset
})
const pages = computed(() => {
  const pages: number[] = []
  const max = Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPage)
  for (let i = startPage.value; i <= max; i++)
    pages.push(i)

  return pages
})

// 當頁數超過總頁數，或是小於 1 時，自動修正
watch([currentPage, () => props.totalPage], ([newCurrentPage, newTotalPage]) => {
  if (newCurrentPage > newTotalPage)
    currentPage.value = newTotalPage
  else if (newCurrentPage < 1)
    currentPage.value = 1
})
</script>

<template lang="pug">
ul(class="flex justify-center gap-2 py-8")
  li
    BasePaginationButton(
      :disabled="isFirstPage"
      @click="currentPage = 1"
    ) First
  //- li
  //-   BasePaginationButton(
  //-     :disabled="isFirstPage"
  //-     @click="prev()"
  //-   ) Previous
  li(v-for="(page, _i) in pages" :key="_i")
    BasePaginationButton(
      :class="{ active: currentPage === page }"
      @click="currentPage = page"
    ) {{ page }}
  //- li
  //-   BasePaginationButton(
  //-     :disabled="isLastPage"
  //-     @click="next()"
  //-   ) Next
  li
    BasePaginationButton(
      :disabled="isLastPage"
      @click="currentPage = totalPage"
    ) Last
</template>
