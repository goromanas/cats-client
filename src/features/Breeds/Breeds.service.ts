import { config } from 'config'
import { useQuery } from 'react-query'

const getBreeds = async () => {
  const { endpoints } = config
  const response = await fetch(endpoints.breedsUrl)
  const data = await response.json()

  return data
}

export const useGetBreedsQuery = () => useQuery('breeds', getBreeds)
