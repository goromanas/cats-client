import { config } from 'config'
import { useQuery } from 'react-query'
import { Breed, BreedResponse } from './Breeds.types'

const getBreeds = async () => {
  const { endpoints } = config
  const response = await fetch(endpoints.breedsUrl)
  const data: BreedResponse[] = await response.json()

  return transformBreedData(data)
}

const transformBreedData = (data: BreedResponse[]): Breed[] =>
  data.map(({ name, description, weight, id, temperament, origin }) => ({
    name,
    description,
    id,
    temperament,
    origin,
    weight: `${weight.metric} kg.`
  }))

export const useGetBreedsQuery = () => useQuery('breeds', getBreeds)
