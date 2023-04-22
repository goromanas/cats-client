import { Table } from 'components/Table'
import { useGetBreedsQuery } from './Breeds.service'

export const Breeds = () => {
  const { data } = useGetBreedsQuery()
  if (!data) return null
  console.log(data)
  return <Table data={data as Record<string, any>[]} />
}
