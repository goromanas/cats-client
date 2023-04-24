import { useCallback, useEffect, useState } from 'react'
import { TableColumn } from '.'
import { TableContainer } from './Table.style'
import { TableHeader } from './TableHeader'
import { TableRows } from './TableRows'
import { getComparator, sortTableRows } from './Table.utils'
import { TableOrder } from './Table.types'
import { Breed } from 'features/Breeds/Breeds.types'
import { TablePagination } from './TablePagination'

const DEFAULT_ORDER = 'asc'
const DEFAULT_ORDER_BY = 'name'
const DEFAULT_ROWS_PER_PAGE = 5

export type TableProps = {
  data: Breed[]
  columns: TableColumn<Breed, keyof Breed>[]
}

export const Table = <T extends string | number>({ data, columns }: TableProps): JSX.Element => {
  const [visibleRows, setVisibleRows] = useState<Breed[]>([])
  const [order, setOrder] = useState<TableOrder>(DEFAULT_ORDER)
  const [orderBy, setOrderBy] = useState<keyof Breed>(DEFAULT_ORDER_BY)
  const [page, setPage] = useState(0)

  const handleChangeOrder = () => setOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))
  const handleChangeOrderBy = (value: keyof Breed) => setOrderBy(value)

  const handleChangePage = useCallback(
    (newPage: number) => {
      setPage(newPage)

      const sortedRows = sortTableRows(data, getComparator(order, orderBy))
      const updatedRows = sortedRows.slice(
        newPage * DEFAULT_ROWS_PER_PAGE,
        newPage * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
      )
      setVisibleRows(updatedRows)
    },
    [order, orderBy, data]
  )

  useEffect(() => {
    const rowsOnMount = sortTableRows(data, getComparator(order, orderBy)).slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
    )

    setVisibleRows(rowsOnMount)
  }, [orderBy, order])

  return (
    <>
      <TableContainer>
        <TableHeader
          columns={columns}
          changeOrder={handleChangeOrder}
          changeOrderBy={handleChangeOrderBy}
          order={order}
          orderBy={orderBy}
        />
        <TableRows data={visibleRows} columns={columns} />
      </TableContainer>
      <TablePagination
        count={data.length}
        rowsPerPage={DEFAULT_ROWS_PER_PAGE}
        page={page}
        onPageChange={handleChangePage}
      />
    </>
  )
}
