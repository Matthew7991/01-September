import { writeFile, rmdir, mkdir, rename, rm } from "node:fs/promises"
import { existsSync } from "node:fs"

const blogUrl1 = new URL("./blog1.txt", import.meta.url)
await writeFile(blogUrl1, "Ich bin ein Webdeveloper", { encoding: "utf8" })

const blogUrl2 = new URL("./blog2.txt", import.meta.url)
await writeFile(blogUrl2, "einen beliebigen Text", { encoding: "utf8" })

const assetsUrl = new URL("./assets/", import.meta.url)
if (existsSync(assetsUrl)) {
  await rmdir(assetsUrl)
}

await mkdir(assetsUrl)

const deleteTxtUrl = new URL("./delete.txt", import.meta.url)
if (existsSync(deleteTxtUrl)) {
  await rm(deleteTxtUrl)
}

await writeFile(deleteTxtUrl, "", { encoding: "utf-8" })

const helloTxtUrl = new URL("./Hello.txt", import.meta.url)
await writeFile(helloTxtUrl, "einen beliebigen Text ein", { encoding: "utf-8" })
const helloTxtUrlNew = new URL("./HelloWorld.txt", import.meta.url)
await rename(helloTxtUrl, helloTxtUrlNew)
