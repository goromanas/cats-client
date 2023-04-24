import { useActions, useAppSelector } from 'hooks'
import { HeaderWrapper, HeaderContainer, Fieldset } from './Header.style'
import {
  getSearchParams,
  getSearchPhrase,
  addSearchParam,
  setSearchPhrase,
  removeSearchParam
} from 'features/Breeds/state'
import { ChangeEvent } from 'react'
import { useBreeds } from 'features/Breeds/useBreeds'
import { mapArrayToKeysAndValues } from 'utils'
import { Breed } from 'features/Breeds/Breeds.types'

export const Header = () => {
  const actions = useActions({ setSearchPhrase, addSearchParam, removeSearchParam })
  const searchPhrase = useAppSelector(getSearchPhrase)
  const selectedSearchParams = useAppSelector(getSearchParams)
  const { searchParams } = useBreeds()
  const availableSearchParams = mapArrayToKeysAndValues(searchParams)

  const handleChangeSearchPhrase = (event: ChangeEvent<HTMLInputElement>) => actions.setSearchPhrase(event.target.value)
  const handleChangeSearchParams = (key: keyof Breed) => {
    if (selectedSearchParams.some(item => item === key)) {
      if (selectedSearchParams.length === 1) return
      actions.removeSearchParam(key)
      return
    }

    actions.addSearchParam(key)
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <label htmlFor='search'>Search:</label>
        <input type='text' id='search' name='search' onChange={handleChangeSearchPhrase} value={searchPhrase} />
        <Fieldset>
          <legend>Choose search criteria</legend>
          {availableSearchParams.map(({ key, value }) => (
            <div key={key}>
              <input
                type='checkbox'
                id={key}
                name={value}
                checked={selectedSearchParams.some(item => item === key)}
                onChange={() => handleChangeSearchParams(key)}
              />
              <label htmlFor={key}>{value}</label>
            </div>
          ))}
        </Fieldset>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
