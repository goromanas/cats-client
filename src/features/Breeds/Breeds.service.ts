import { config } from 'config'
import { useQuery } from 'react-query'
import { Breed, BreedResponse } from './Breeds.type'

const getBreeds = async () => {
  const { endpoints } = config
  const response = await fetch(endpoints.breedsUrl)
  const data: BreedResponse[] = await response.json()

  return transformBreedData(data)
}

const transformBreedData = (data: BreedResponse[]): Breed[] =>
  data.map(
    ({
      affection_level,
      alt_names,
      cfa_url,
      child_friendly,
      country_code,
      country_codes,
      dog_friendly,
      energy_level,
      health_issues,
      life_span,
      reference_image_id,
      shedding_level,
      short_legs,
      social_needs,
      stranger_friendly,
      suppressed_tail,
      vcahospitals_url,
      vetstreet_url,
      wikipedia_url,
      ...rest
    }) => ({
      ...rest,
      affectionLevel: affection_level,
      altNames: alt_names,
      cfaUrl: cfa_url,
      childFriendly: child_friendly,
      countryCode: country_code,
      countryCodes: country_codes,
      dogFriendly: dog_friendly,
      energyLevel: energy_level,
      healthIssues: health_issues,
      lifeSpan: life_span,
      referenceImageId: reference_image_id,
      sheddingLevel: shedding_level,
      shortLegs: short_legs,
      socialNeeds: social_needs,
      strangerFriendly: stranger_friendly,
      suppressedTail: suppressed_tail,
      vcahospitalsUrl: vcahospitals_url,
      vetstreetUrl: vetstreet_url,
      wikipediaUrl: wikipedia_url
    })
  )

export const useGetBreedsQuery = () => useQuery('breeds', getBreeds)
