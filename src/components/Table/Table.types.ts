export type TableColumn<T, K extends keyof T> = {
  key: K
  header: string
  width?: number
}
