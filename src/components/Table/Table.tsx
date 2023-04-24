import { useCallback, useEffect, useState } from 'react'
import { TableContainer } from './Table.style'
import { TableHeader } from './TableHeader'
import { TableRows } from './TableRows'
import { DEFAULT_ROWS_PER_PAGE, sortAndUpdateRows } from './Table.utils'
import { TableOrder, TableColumn } from './Table.types'
import { TablePagination } from './TablePagination'

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

      const updatedRows = sortAndUpdateRows({ data, order, orderBy, page: newPage })
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

      const updatedRows = sortAndUpdateRows({ data, order: toggledOrder, orderBy: key, page })

      setVisibleRows(updatedRows)
    },
    [data, order, orderBy, page]
  )

  useEffect(() => {
    const initialRows = sortAndUpdateRows({ data, order, orderBy, page: 0 })

    setVisibleRows(initialRows)
  }, [])

  return (
    <>
      <TablePagination
        count={data.length}
        rowsPerPage={DEFAULT_ROWS_PER_PAGE}
        page={page}
        onPageChange={handleChangePage}
      />
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
