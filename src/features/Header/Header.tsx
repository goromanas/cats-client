import { HeaderWrapper, HeaderContainer } from './Header.style'
import { Search } from 'features/Search'

export const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <Search />
    </HeaderContainer>
  </HeaderWrapper>
)
