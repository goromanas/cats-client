import { Header } from 'features/Header'
import { Outlet } from 'react-router'
import styled from 'styled-components'

const Wrapper = styled.div``

const Main = styled.main`
  margin: 0 auto;
  max-width: 1100px;
`

export const Layout = () => (
  <Wrapper>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </Wrapper>
)
