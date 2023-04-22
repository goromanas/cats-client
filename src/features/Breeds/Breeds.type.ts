interface Weight {
  imperial: string
  metric: string
}

export interface BreedResponse {
  adaptability: number
  affection_level: number
  alt_names: string
  cfa_url: string
  child_friendly: number
  country_code: string
  country_codes: string
  description: string
  dog_friendly: number
  energy_level: number
  experimental: number
  grooming: number
  hairless: number
  health_issues: number
  hypoallergenic: number
  id: string
  indoor: number
  intelligence: number
  lap: number
  life_span: string
  name: string
  natural: number
  origin: string
  rare: number
  reference_image_id: string
  rex: number
  shedding_level: number
  short_legs: number
  social_needs: number
  stranger_friendly: number
  suppressed_tail: number
  temperament: string
  vcahospitals_url: string
  vetstreet_url: string
  vocalisation: number
  weight: Weight
  wikipedia_url: string
}

export interface Breed {
  adaptability: number
  affectionLevel: number
  altNames: string
  cfaUrl: string
  childFriendly: number
  countryCode: string
  countryCodes: string
  description: string
  dogFriendly: number
  energyLevel: number
  experimental: number
  grooming: number
  hairless: number
  healthIssues: number
  hypoallergenic: number
  id: string
  indoor: number
  intelligence: number
  lap: number
  lifeSpan: string
  name: string
  natural: number
  origin: string
  rare: number
  referenceImageId: string
  rex: number
  sheddingLevel: number
  shortLegs: number
  socialNeeds: number
  strangerFriendly: number
  suppressedTail: number
  temperament: string
  vcahospitalsUrl: string
  vetstreetUrl: string
  vocalisation: number
  weight: Weight
  wikipediaUrl: string
}
