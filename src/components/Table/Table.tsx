import { useCallback, useEffect, useState } from 'react'
import { TableColumn } from '.'
import { TableContainer } from './Table.style'
import { TableHeader } from './TableHeader'
import { TableRows } from './TableRows'
import { getComparator, sortTableRows } from './Table.utils'
import { TableOrder } from './Table.types'
import { TablePagination } from './TablePagination'

const DEFAULT_ROWS_PER_PAGE = 5

type TableProps<T> = {
  data: T[]
  columns: TableColumn<T, keyof T>[]
}

export const Table = <T extends Record<string, any>>({ data, columns }: TableProps<T>): JSX.Element => {
  const [visibleRows, setVisibleRows] = useState<T[]>([])
  const [order, setOrder] = useState<TableOrder>('asc')
  const [orderBy, setOrderBy] = useState<keyof T>(Object.keys(data[0])[0])
  const [page, setPage] = useState(0)

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

  const handleSort = useCallback(
    (key: keyof T) => {
      const isAsc = orderBy === key && order === 'asc'
      const toggledOrder = isAsc ? 'desc' : 'asc'
      setOrder(toggledOrder)
      setOrderBy(key)

      const sortedRows = sortTableRows(data, getComparator(toggledOrder, key))
      const updatedRows = sortedRows.slice(
        page * DEFAULT_ROWS_PER_PAGE,
        page * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
      )
      setVisibleRows(updatedRows)
    },
    [data, order, orderBy, page]
  )

  useEffect(() => {
    const rowsOnMount = sortTableRows(data, getComparator(order, orderBy)).slice(
      0 * DEFAULT_ROWS_PER_PAGE,
      0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
    )

    setVisibleRows(rowsOnMount)
  }, [])

  return (
    <>
      <TableContainer>
        <TableHeader columns={columns} order={order} orderBy={orderBy} handleSort={handleSort} />
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
