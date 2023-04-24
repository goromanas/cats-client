import { TBody } from './Table.style'
import { TableColumn } from './Table.types'

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>
  columns: Array<TableColumn<T, K>>
}

export const TableRows = <T, K extends keyof T>({ data, columns }: TableRowsProps<T, K>): JSX.Element => {
  const rows = data.map((row, rowIndex) => {
    return (
      <tr key={`row-${rowIndex}`}>
        {columns.map((column, columnIndex) => {
          return <td key={`cell-${columnIndex}`}>{row[column.key] as string}</td>
        })}
      </tr>
    )
  })

  return <TBody>{rows}</TBody>
}
