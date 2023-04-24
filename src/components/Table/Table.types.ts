export type TableColumn<T, K extends keyof T> = {
  key: K
  header: string
  width?: number
}

export type TableOrder = 'asc' | 'desc'
