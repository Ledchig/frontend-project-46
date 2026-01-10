const format = (obj) => {
  const rows = Object.entries(obj).map(([k, v]) => {
    const { type, value, oldValue, newValue } = v
    switch (type) {
      case 'unchanged':
        return `  ${k}: ${value}`
      case 'deleted':
        return `- ${k}: ${value}`
      case 'added':
        return `+ ${k}: ${value}`
      case 'changed':
        return `- ${k}: ${oldValue}\n  + ${k}: ${newValue}`
      default:
        throw new Error(`Unknown type: ${type}`)
    }
  })
  return (`{\n  ${rows.join('\n  ')}\n}`)
}

export default format
