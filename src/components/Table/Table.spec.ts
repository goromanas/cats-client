import { sortTableRows, getComparator, updateVisibleRowsByPage } from './Table.utils'
import {
  mockTableRowsAsc,
  expectedAscOrder,
  mockTableRowsDesc,
  expectedDescOrder,
  mockPaginationData
} from './__mocks__/table'

describe('Table component', () => {
  it('Should sort rows based on the name ascending order', () => {
    const order = 'asc'
    const orderBy = 'name'
    const sortedRows = sortTableRows(mockTableRowsAsc, getComparator(order, orderBy))

    expect(sortedRows[0]).toMatchObject(expectedAscOrder[0])
    expect(sortedRows[1]).toMatchObject(expectedAscOrder[1])
    expect(sortedRows[2]).toMatchObject(expectedAscOrder[2])
  })

  it('Should sort rows based on the age descending order', () => {
    const order = 'desc'
    const orderBy = 'age'
    const sortedRows = sortTableRows(mockTableRowsDesc, getComparator(order, orderBy))

    expect(sortedRows[0]).toMatchObject(expectedDescOrder[0])
    expect(sortedRows[1]).toMatchObject(expectedDescOrder[1])
    expect(sortedRows[2]).toMatchObject(expectedDescOrder[2])
    expect(sortedRows[3]).toMatchObject(expectedDescOrder[3])
    expect(sortedRows[4]).toMatchObject(expectedDescOrder[4])
  })

  it('Should slice the data for different pages', () => {
    const firstPageData = updateVisibleRowsByPage(mockPaginationData, 0, 2)
    const secondPageData = updateVisibleRowsByPage(mockPaginationData, 1, 2)
    const thirdPageData = updateVisibleRowsByPage(mockPaginationData, 2, 2)

    expect(firstPageData[0]).toMatchObject(mockPaginationData[0])
    expect(firstPageData[1]).toMatchObject(mockPaginationData[1])
    expect(secondPageData[0]).toMatchObject(mockPaginationData[2])
    expect(secondPageData[1]).toMatchObject(mockPaginationData[3])
    expect(thirdPageData[0]).toMatchObject(mockPaginationData[4])

    expect(firstPageData.length).toBe(2)
    expect(secondPageData.length).toBe(2)
    expect(thirdPageData.length).toBe(1)
  })
})
