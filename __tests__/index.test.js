import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { test, expect } from '@jest/globals'
import { fileURLToPath } from 'url'
import genDiff from '../src/index.js'
import format from '../src/format.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getFixturePath = filename => join(__dirname, '..', '__fixtures__', filename)

test('default', () => {
  const received = genDiff(
    getFixturePath('file1.json'),
    getFixturePath('file2.json'),
  )
  const expected = readFileSync(getFixturePath('default.txt'), 'utf8')

  expect(received).toEqual(expected.trim())
})

test('flat yml', () => {
  const received = genDiff(
    getFixturePath('file1.yml'),
    getFixturePath('file2.yml'),
  )
  const expected = readFileSync(getFixturePath('expected-flat-yml.txt'), 'utf8')

  expect(received).toEqual(expected.trim())
})

test('format unknown type', () => {
  const invalidData = {
    k: {
      type: 'unknownType',
    },
  }

  expect(() => format(invalidData)).toThrow('Unknown type: unknownType')
})
