
export const getIncrementalIdFn = (seed = 0) => {
  let idSeed = seed
  return () => {
    return idSeed++
  }
}
