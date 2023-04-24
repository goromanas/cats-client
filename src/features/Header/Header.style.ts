import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 60px;
  background: ${({ theme }) => theme.colors.submarine};
`

export const HeaderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`
