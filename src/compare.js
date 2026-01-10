import _ from 'lodash'

const compare = (obj1, obj2) => {
  const keys = _.union(Object.keys(obj1), Object.keys(obj2)).sort()
  return keys.reduce((acc, key) => {
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (obj1[key] === obj2[key]) {
        acc[key] = { type: 'unchanged', value: obj1[key] }
      }
      else {
        acc[key] = { type: 'changed', oldValue: obj1[key], newValue: obj2[key] }
      }
    }
    else if (_.has(obj1, key)) {
      acc[key] = { type: 'deleted', value: obj1[key] }
    }
    else {
      acc[key] = { type: 'added', value: obj2[key] }
    }
    return acc
  }, {})
}

export default compare
