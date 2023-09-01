import MAX_SAFE_INTEGER from './maxSafeInteger'

const isSafeNumber = (value: any) => {
  return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER
}
export default isSafeNumber
