import parse from './parser.js'

export default (filepath1, filepath2) => {
  const firstData = parse(filepath1)
  const secondData = parse(filepath2)

  return { firstData, secondData }
}
