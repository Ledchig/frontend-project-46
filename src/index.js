import compare from './compare.js'
import format from './format.js'
import parse from './parse.js'

const gendiff = (filepath1, filepath2) => {
  const firstData = parse(filepath1)
  const secondData = parse(filepath2)

  return format(compare(firstData, secondData))
}

export default gendiff
