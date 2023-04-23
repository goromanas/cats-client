import { TableColumn } from 'components/Table'
import { useGetBreedsQuery } from './Breeds.service'
import { Breed } from './Breeds.types'

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
  return { data, columns, ...rest }
}
