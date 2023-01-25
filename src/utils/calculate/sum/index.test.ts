import { arraySum } from '.'

describe('calculate sum function', () => {
  test('should return 63', () => {
    const NUMBERS = [10, 20, 30, 3]
    expect(arraySum(NUMBERS)).toEqual(63)
  })
})
