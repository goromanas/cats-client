import { TableColumn } from '.'
import { TableContainer } from './Table.style'
import { TableHeader } from './TableHeader'
import { TableRows } from './TableRows'

export type TableProps<T, K extends keyof T> = {
  data: Array<T>
  columns: TableColumn<T, K>[]
}

export const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>): JSX.Element => (
  <TableContainer>
    <TableHeader columns={columns} />
    <TableRows data={data} columns={columns} />
  </TableContainer>
)
