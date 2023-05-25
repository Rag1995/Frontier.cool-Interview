import { useApiFetch } from '@/utils'
import { Mode } from '@/types'
import type { ApiResponse, User } from '@/types'

// 把資料放在 localStorage 中，避免每次重新整理時，都要重新載入資料
import { useStorage } from '@vueuse/core'

export const useUserStore = defineStore('user', () => {
  // 目前頁碼
  const page = useStorage('page', 1)
  // 每頁筆數，預設 30
  const per = useStorage('per', 30)

  // 需求資料筆數，從環境參數讀取
  const total = ref(Number(import.meta.env.VITE_USER_ROWS))

  // 把我的最愛的使用者 id 存在 localStorage 中
  const favorId = useStorage<string[]>('favor_users', [])

  // 取得指定比數的資料 =>  ?results=5000
  // 以分頁模式取得資料 =>  ?page=3&results=10
  const url = computed(() => `?results=${total.value}`)

  // 取得資料，轉換成 json 格式，並指定型別
  const { isFetching, data } = useApiFetch(url)
    .get()
    .json<ApiResponse<User[]>>()

  // 取得使用者資料，並加上是否為最愛的屬性
  const users = computed<User[]>(() => {
    return (data.value?.results ?? []).map((user) => {
      const isFavor = favorId.value.includes(user.login.uuid)
      return { ...user, favor: isFavor }
    })
  })

  // 顯示模式，預設為卡片模式
  const mode = useStorage<Mode>('mode', Mode.CARD)

  return {
    isFetching,
    total,
    page,
    per,
    favorId,
    users,
    mode,
  }
})
