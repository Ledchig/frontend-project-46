import { readFileSync } from 'fs'
import path from 'path'

const parse = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const data = readFileSync(absolutePath, 'utf8')

  return JSON.parse(data)
}

export default parse
