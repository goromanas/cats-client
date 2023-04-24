import { Header } from 'features/Header'
import { Outlet } from 'react-router'
import styled from 'styled-components'

const Main = styled.main`
  margin: 0 auto;
  max-width: 1100px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Layout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </>
)
