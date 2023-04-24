import { Breed } from 'features/Breeds/Breeds.types'
import { THead, TableHeaderCell, Th } from './Table.style'
import { TableColumn, TableOrder } from './Table.types'
import { renderIcon } from 'components/Icons'

export type TableHeaderProps = {
  columns: TableColumn<Breed, keyof Breed>[]
  changeOrder: () => void
  changeOrderBy: (value: keyof Breed) => void
  order: TableOrder
  orderBy: keyof Breed
}

export const TableHeader = ({ columns, changeOrder, changeOrderBy, order, orderBy }: TableHeaderProps): JSX.Element => {
  const renderOrderIcon = (key: keyof Breed) => {
    if (key !== orderBy) return null

    return renderIcon(order === 'asc' ? 'arrowDown' : 'arrowUp')
  }

  const handleOnSortClick = (key: keyof Breed) => {
    if (key === orderBy) {
      changeOrder()
      return
    }
    changeOrderBy(key)
  }
  const headers = columns.map((column, index) => {
    return (
      <Th key={`table-header-cells-${index}`} onClick={() => handleOnSortClick(column.key)}>
        <TableHeaderCell>
          {renderOrderIcon(column.key)}
          {column.header}
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
