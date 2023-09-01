import { data } from "./data.js"
import { filterByPopulationOver, filterByPopulationUnder } from "./filter.js"

console.log(filterByPopulationOver(data, 100000))
console.log(filterByPopulationUnder(data, 100000))
