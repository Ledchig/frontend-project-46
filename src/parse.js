import { readFileSync } from 'fs'
import yml from 'js-yaml'
import path from 'path'

const parsers = (filepath) => {
  const parts = filepath.split('.')
  const ext = parts[parts.length - 1]
  const absolutePath = path.resolve(process.cwd(), filepath)
  const data = readFileSync(absolutePath, 'utf8')

  switch (ext) {
    case 'json':
      return JSON.parse(data)
    case 'yml':
    case 'yaml':
      return yml.load(data)
    default:
      throw new Error(`Unkknown extension: ${ext}`)
  }
}

export default parsers
