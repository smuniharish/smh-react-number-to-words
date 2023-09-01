import makeOrdinal from './makeOrdinal'
import toWords from './toWords'

const toWordsOrdinal = (number: number) => {
  const words = toWords(number, true)
  return makeOrdinal(words)
}

export default toWordsOrdinal
