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
