export function filterByPopulationOver(array, number) {
  return array.filter((city) => city.population > number)
}

export function filterByPopulationUnder(array, number) {
  return array.filter((city) => city.population < number)
}
