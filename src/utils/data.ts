export const capitalizeFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export const mapArrayToKeysAndValues = <T extends string>(data: T[]) =>
  data.map(item => ({ key: item, value: capitalizeFirstLetter(item) }))
