import { TBody } from './Table.style'
import { TableColumn } from './Table.types'

export type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>
  columns: Array<TableColumn<T, K>>
}

export const TableRows = <T, K extends keyof T>({ data, columns }: TableRowsProps<T, K>): JSX.Element => {
  const rows = data.map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        {columns.map((column, index2) => {
          return <td key={`cell-${index2}`}>{row[column.key] as string}</td>
        })}
      </tr>
    )
  })

  return <TBody>{rows}</TBody>
}
