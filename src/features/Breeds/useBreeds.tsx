import { TableColumn } from 'components/Table'
import { useGetBreedsQuery } from './Breeds.service'
import { Breed } from './Breeds.types'
import { useAppSelector } from 'hooks'
import { getSearchPhrase } from './state'

const columns: TableColumn<Breed, keyof Breed>[] = [
  {
    key: 'name',
    header: 'Name'
  },
  {
    key: 'temperament',
    header: 'Temperament'
  },
  {
    key: 'origin',
    header: 'Origin'
  },
  {
    key: 'weight',
    header: 'Weight'
  },
  {
    key: 'description',
    header: 'Description'
  }
]

export const useBreeds = () => {
  const { data, ...rest } = useGetBreedsQuery()
  const searchPhrase = useAppSelector(getSearchPhrase)
  const filteredData = data?.filter(item => item.name.toLowerCase().includes(searchPhrase.toLowerCase()))

  return { data: filteredData, columns, ...rest }
}
