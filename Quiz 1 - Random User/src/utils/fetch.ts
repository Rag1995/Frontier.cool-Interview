import { createFetch } from '@vueuse/core'
import type { MaybeRefOrGetter, UseFetchOptions } from '@vueuse/core'
import URI from 'urijs'

// 自定義 fetch hook，用來取得 API 資料
export const useApiFetch = (
  url: MaybeRefOrGetter<string>,
  useFetchOptions: UseFetchOptions = {},
) => {
  // 從 .env 取得 API 網址
  const baseUrl = import.meta.env.VITE_API_URL as string
  // 從 .env 取得 API seed，用來確保每次取得的資料都是一樣的
  const apiSeed = import.meta.env.VITE_API_SEED as string

  // 產生完整的 API 網址，並加上 seed 參數
  const apiUrl = computed(() => {
    return URI(unref(url)).addSearch('seed', apiSeed).toString()
  })

  // 呼叫 createFetch 產生 fetch hook
  return createFetch({
    baseUrl,
    fetchOptions: {
      mode: 'cors',
    },
    options: {
      // 初始載入時，立即執行
      immediate: true,
      // url更新時，重新執行
      refetch: true,
    },
  })(apiUrl, useFetchOptions)
}
