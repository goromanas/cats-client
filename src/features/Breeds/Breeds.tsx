import { Table } from 'components/Table'
import { useGetBreedsQuery } from './Breeds.service'

export const Breeds = () => {
  const { data } = useGetBreedsQuery()
  console.log(data)
  return <Table />
}
