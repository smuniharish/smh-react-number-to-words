import isSafeNumber from './isSafeNumber'

const toOrdinal = (number: number) => {
  const num = number

  if (!isFinite(num)) {
    throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')')
  }
  if (!isSafeNumber(num)) {
    throw new RangeError('Input is not a safe number, it’s either too large or too small.')
  }
  const str = String(num)
  const lastTwoDigits = Math.abs(num % 100)
  const betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13
  const lastChar = str.charAt(str.length - 1)
  return (
    str +
    (betweenElevenAndThirteen
      ? 'th'
      : lastChar === '1'
      ? 'st'
      : lastChar === '2'
      ? 'nd'
      : lastChar === '3'
      ? 'rd'
      : 'th')
  )
}

export default toOrdinal
