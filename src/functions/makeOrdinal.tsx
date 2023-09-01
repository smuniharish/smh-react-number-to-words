const ENDS_WITH_DOUBLE_ZERO_PATTERN = /(hundred|thousand|(m|b|tr|quadr)illion)$/
const ENDS_WITH_TEEN_PATTERN = /teen$/
const ENDS_WITH_Y_PATTERN = /y$/
const ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/
const ordinalLessThanThirteen: any = {
  zero: 'zeroth',
  one: 'first',
  two: 'second',
  three: 'third',
  four: 'fourth',
  five: 'fifth',
  six: 'sixth',
  seven: 'seventh',
  eight: 'eighth',
  nine: 'ninth',
  ten: 'tenth',
  eleven: 'eleventh',
  twelve: 'twelfth',
}
const makeOrdinal = (words: any) => {
  // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
  if (ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) || ENDS_WITH_TEEN_PATTERN.test(words)) {
    return words + 'th'
  }
  // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
  else if (ENDS_WITH_Y_PATTERN.test(words)) {
    return words.replace(ENDS_WITH_Y_PATTERN, 'ieth')
  }
  // Ends with one through twelve
  else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
    return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN, replaceWithOrdinalVariant)
  }
  return words
}

const replaceWithOrdinalVariant = (numberWord: any) => {
  return ordinalLessThanThirteen[numberWord]
}

export default makeOrdinal
