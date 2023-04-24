import { Table } from 'components/Table'
import { Loader } from 'components/Loader/Loader'
import { useBreeds } from './useBreeds'

export const Breeds = () => {
  const { columns, isLoading, data, isError } = useBreeds()
  if (isLoading) return <Loader />

  if (!data || isError) return <div>Nothing to show</div>

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  )
}
