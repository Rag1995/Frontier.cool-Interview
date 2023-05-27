export type ColorVariant = 'success' | 'danger' | 'warning' | 'info'

export interface Pair {
  path: string
  value: string
}
export interface Tree {
  name: string
  value: string | null
  children: Tree[]
}