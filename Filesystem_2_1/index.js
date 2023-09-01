import { writeFile } from "node:fs/promises"
import data from "./data.json" assert { type: "json" }

const dataTxtUrl = new URL("./data.txt", import.meta.url)
const dataObjectsString = data.map((item) => {
  return `${item.id} - ${item.title}\n${item.description}\n\n`
})
const dataTxtContent = dataObjectsString.join("")
await writeFile(dataTxtUrl, dataTxtContent, { encoding: "utf8" })

// # This is an alternative way
// import { readFile } from "fs/promises"
// const json = JSON.parse(
//   await readFile(new URL("./data.json", import.meta.url))
// )
