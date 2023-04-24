import { TableOrder } from './Table.types'

export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

export const getComparator = <T, Key extends string | number | symbol>(
  order: TableOrder,
  orderBy: Key
): ((a: { [key in Key]: T }, b: { [key in Key]: T }) => number) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

export const sortTableRows = <T>(array: T[], comparator: (a: T, b: T) => number) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })

  return stabilizedThis.map(el => el[0])
}
