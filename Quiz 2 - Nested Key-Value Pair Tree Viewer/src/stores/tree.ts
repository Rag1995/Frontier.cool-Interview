import type { Pair, Tree } from '@/types'

export const useTreeStore = defineStore('tree', () => {
  // 使用者輸入的 key-value pair
  const pairs = reactive<Pair[]>([
    { path: 'grand.parent1.child1', value: '12' },
    { path: 'grand.parent2.child1', value: '34' },
    { path: 'grand.parent1.child2', value: '56' },
  ])
  // 新增 pair
  const addPair = () => {
    pairs.push({ path: '', value: '' })
  }
  // 移除 pair
  const removePair = (index: number) => {
    pairs.splice(index, 1)
  }

  // 轉換成 treeData
  const treeData = computed(() => {
    return pairs.reduce((tree, pair) => {
      const { path, value } = pair
      // 將 path 拆成 keys 陣列
      const keys = path.split('.')

      keys.reduce((tree, key, index, keys) => {
        // 如果 key 為空，則直接回傳 tree
        if(!key) return tree

        // 如果是最後一個 key，則將 value 設定到 node
        const isLastKey = index === keys.length - 1

        // 搜尋與 key 相同的 tree
        const idx = tree.findIndex((node) => node.name === key)
        if(idx > -1) {
          // 如果有找到，則將 tree 設定為找到的 tree
          if(isLastKey) tree[idx].value = value
          return tree[idx].children

        } else {
          // 如果沒找到，則新增一個 node
          const newNode: Tree = {
            name: key,
            value: isLastKey ? value : null,
            children: []
          }
          tree.push(newNode)
          return newNode.children
        }
      }, tree)

      return tree
    }, [] as Tree[])
  })

  return {
    pairs,
    addPair,
    removePair,
    treeData
  }
})