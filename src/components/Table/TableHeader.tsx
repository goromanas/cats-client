import { THead, TableHeaderCell, Th } from './Table.style'
import { TableColumn, TableOrder } from './Table.types'
import { renderIcon } from 'components/Icons'

type TableHeaderProps<T> = {
  columns: TableColumn<T, keyof T>[]
  order: TableOrder
  orderBy: keyof T
  handleSort: (key: keyof T) => void
}

export const TableHeader = <T,>({ columns, order, orderBy, handleSort }: TableHeaderProps<T>): JSX.Element => {
  const renderOrderIcon = (key: keyof T) => {
    if (key !== orderBy) return null

    return renderIcon(order === 'asc' ? 'arrowDown' : 'arrowUp')
  }

  const headers = columns.map(({ key, header }, index) => {
    return (
      <Th key={`table-header-cells-${index}`} onClick={() => handleSort(key)}>
        <TableHeaderCell>
          {renderOrderIcon(key)}
          {header}
        </TableHeaderCell>
      </Th>
    )
  })

  return (
    <THead>
      <tr>{headers}</tr>
    </THead>
  )
}
