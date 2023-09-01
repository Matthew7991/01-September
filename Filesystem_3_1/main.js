import { mkdir, readFile, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"

const dataUrl = new URL("./data/", import.meta.url)
if (!existsSync(dataUrl)) await mkdir(dataUrl)

async function addStringToFile(string) {
  const fileUrl = new URL(`./text.txt`, dataUrl)
  if (existsSync(fileUrl)) {
    const contents = await readFile(fileUrl, "utf8")
    await writeFile(fileUrl, `${contents}\n${string}`, "utf8")
  } else {
    await writeFile(fileUrl, string, "utf8")
  }
}

addStringToFile("Does This work ?")
