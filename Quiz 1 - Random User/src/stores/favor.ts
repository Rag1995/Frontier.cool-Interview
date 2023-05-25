import { Mode } from '@/types'
import type { User } from '@/types'
import { useUserStore } from './user'

// 把資料放在 localStorage 中，避免每次重新整理時，都要重新載入資料
import { useStorage } from '@vueuse/core'

export const useFavorStore = defineStore('favor', () => {
  const page = useStorage('favor_page', 1) // 目前頁碼
  const per = useStorage('favor_per', 30) // 每頁筆數，預設 30

  // 取得使用者資料，並塞選是否為最愛
  const userStore = useUserStore()
  const { users } = toRefs(userStore)
  const favor = computed<User[]>(() => {
    return users.value.filter((user) => {
      return user.favor
    })
  })

  // 顯示模式，預設為卡片模式
  const mode = useStorage<Mode>('favor_mode', Mode.CARD)

  return {
    page,
    per,
    favor,
    mode,
  }
})
