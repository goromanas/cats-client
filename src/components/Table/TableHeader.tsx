import { THead } from './Table.style'
import { TableColumn } from './Table.types'

export type TableHeaderProps<T, K extends keyof T> = {
  columns: TableColumn<T, K>[]
}

export const TableHeader = <T, K extends keyof T>({ columns }: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    return <th key={`table-header-cells-${index}`}>{column.header}</th>
  })

  return (
    <THead>
      <tr>{headers}</tr>
    </THead>
  )
}
