import { Table } from 'components/Table'
import { Loader } from 'components/Loader/Loader'
import { useBreeds } from './useBreeds'

export const Breeds = () => {
  const { columns, isLoading, data } = useBreeds()
  if (isLoading || !data) return <Loader />

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  )
}
