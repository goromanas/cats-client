import { useActions, useAppSelector } from 'hooks'
import { HeaderWrapper, HeaderContainer } from './Header.style'
import { getSearchPhrase, setSearchPhrase } from 'features/Breeds/state'
import { ChangeEvent } from 'react'

export const Header = () => {
  const actions = useActions({ setSearchPhrase })
  const searchPhrase = useAppSelector(getSearchPhrase)

  const handleChangeSearchPhrase = (event: ChangeEvent<HTMLInputElement>) => actions.setSearchPhrase(event.target.value)

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <label htmlFor='search'>Search:</label>
        <input type='text' id='search' name='search' onChange={handleChangeSearchPhrase} value={searchPhrase} />
      </HeaderContainer>
    </HeaderWrapper>
  )
}
