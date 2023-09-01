import { readFile, mkdir, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"

const filePath = new URL("./test/user.txt", import.meta.url)
const fileContent = await readFile(filePath, { encoding: "utf8" })

const users = fileContent.split("\r\n")
users.pop()
console.log(users)

for (const user of users) {
  console.log(user)
  const filePath = new URL(`./test/${user}/`, import.meta.url)
  if (!existsSync(filePath)) {
    await mkdir(filePath)
  }

  const readMePath = new URL("./README.md", filePath)
  const content = `# ${user}
  Welcome to my folder
  `
  await writeFile(readMePath, content, { encoding: "utf-8" })
}
