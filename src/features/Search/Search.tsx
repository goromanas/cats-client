import { Input } from 'components/Input'
import { Breed } from 'features/Breeds/Breeds.types'
import {
  setSearchPhrase,
  addSearchParam,
  removeSearchParam,
  getSearchPhrase,
  getSearchParams
} from 'features/Breeds/state'
import { useBreeds } from 'features/Breeds/useBreeds'
import { useActions, useAppSelector } from 'hooks'
import { ChangeEvent } from 'react'
import { mapArrayToKeysAndValues } from 'utils'
import { CheckboxWrapper, Fieldset, SearchContainer } from './Search.style'
import { Checkbox } from 'components/Checkbox'

export const Search = () => {
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
    <SearchContainer>
      <Input
        type='text'
        id='search'
        name='search'
        onChange={handleChangeSearchPhrase}
        value={searchPhrase}
        placeholder='Search'
        prefix='🔍'
      />
      <Fieldset>
        <legend>Search by</legend>
        {availableSearchParams.map(({ key, value }) => (
          <CheckboxWrapper key={key}>
            <Checkbox
              id={key}
              name={value}
              checked={selectedSearchParams.some(item => item === key)}
              onChange={() => handleChangeSearchParams(key)}
            />
            <label htmlFor={key}>{value}</label>
          </CheckboxWrapper>
        ))}
      </Fieldset>
    </SearchContainer>
  )
}
