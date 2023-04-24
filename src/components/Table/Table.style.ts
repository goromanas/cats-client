import styled from 'styled-components'

export const TableContainer = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  min-width: 100%;
  border-radius: 4px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  th,
  td {
    padding: 12px 15px;
  }

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.alto};
  }
`

export const TBody = styled.tbody`
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.white};

  tr {
    border-bottom: 1px solid #dddddd;
  }
`

export const THead = styled.thead`
  font-size: 0.75rem;
  font-weight: 500;
  height: 70px;
  background: ${({ theme }) => theme.colors.white};

  tr {
    color: ${({ theme }) => theme.colors.nevada};
    text-align: left;
  }
`

export const Th = styled.th`
  cursor: pointer;
`

export const TableHeaderCell = styled.tbody`
  display: flex;
  column-gap: 10px;
  align-items: center;
`
export const PageArrowContainer = styled.div<{ isDisabled: boolean }>`
  color: ${({ isDisabled, theme }) => (isDisabled ? theme.colors.nevada : theme.colors.outerSpace)};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'none' : 'all')};
  cursor: pointer;
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`

export const NotFoundContainer = styled.tbody`
  padding: 40px;
  display: flex;
  width: 100%;
`
