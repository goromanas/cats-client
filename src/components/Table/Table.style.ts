import styled from 'styled-components'

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin: 25px 0;

  th,
  td {
    padding: 12px 15px;
  }
`

export const TBody = styled.tbody`
  font-size: 12px;

  tr {
    border-bottom: 1px solid #dddddd;
  }

  tr:nth-of-type(even) {
    background-color: #b2bec3;
  }

  tr:last-of-type {
    border-bottom: 2px solid #ff7675;
  }
`

export const THead = styled.thead`
  tr {
    background-color: #ff7675;
    color: #ffffff;
    text-align: left;
  }
`

export const Th = styled.th`
  cursor: pointer;
`

export const TableHeaderCell = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`
export const PageArrowContainer = styled.div<{ isDisabled: boolean }>`
  color: ${({ isDisabled }) => (isDisabled ? '#bdbdbd' : '#2d3436')};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};
  cursor: pointer;
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`
