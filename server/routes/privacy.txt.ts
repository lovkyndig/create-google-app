import fs from 'node:fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { defineEventHandler } from 'h3'

const currentDir = dirname(fileURLToPath(import.meta.url))
const dir = join(currentDir, '../../public')
let fileExist = false
let fileContent = ''
if (fs.existsSync(dir)) {
  fs.readFile(`${dir}/privacy.txt`, 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(data)
      fileExist = true
      fileContent = data
    }
  })
}

export default defineEventHandler(async (event) => {
  // @ts-ignore
  await appendHeader(event, 'Content-Type', 'text/plain')

  if (fileExist) {
    return fileContent
  }
})
