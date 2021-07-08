export function unmaskValue(value: string, mask: string): string {
  if (!value || !mask) {
    return value
  }
  return value.replace(/\W/g, '')
}

export function maskValue(value: string, mask: string, inputSelection?: [number, number]): string {
  if (!value || !mask) {
    return value
  }
  let clear = unmaskValue(value, mask)
  let _selectionAddedValue = 0
  for (let i = 0; i < clear.length; i++) {
    if (mask.length <= i) {
      clear = clear.substring(0, i)
      break
    } else if (mask[i] === '9') {
      const c = clear[i]
      if (!(c >= '0' && c <= '9')) {
        clear = [clear.slice(0, i), clear.slice(i + 1)].join('')
        i--
        continue
      }
    } else if (mask[i] === 'A') {
      const c = clear[i]
      if (c >= 'a' && c <= 'z') {
        clear = [clear.slice(0, i), c.toUpperCase(), clear.slice(i + 1)].join('')
        continue
      } else if (!(c >= 'A' && c <= 'Z')) {
        clear = [clear.slice(0, i), clear.slice(i + 1)].join('')
        i--
        continue
      }
    } else if (mask[i] === '_') {
    } else {
      clear = [clear.slice(0, i), mask[i], clear.slice(i)].join('')
      if (inputSelection && inputSelection[0] + _selectionAddedValue === i + 1) {
        _selectionAddedValue++
      }
    }
  }
  if (inputSelection && _selectionAddedValue) {
    inputSelection[0] = inputSelection[0] + _selectionAddedValue
    inputSelection[1] = inputSelection[1] + _selectionAddedValue
  }
  return clear
}
