import { isArray, isString, isInArray, isFunction } from '../src/utils'

describe('observe test', () => {
  test('test isArray', () => {
    let arr = [[1, 2, 3], 1, '1', '', null, undefined, {}]
    arr.forEach((item: any, index: number) => {
      if (index === 0) expect(isArray(item)).toBeTruthy()
      else expect(isArray(item)).toBeFalsy()
    })
  })
  test('test isString', () => {
    let arr = ['1', [1, 2, 3], 1, null, undefined, {}]
    arr.forEach((item: any, index: number) => {
      if (index === 0) expect(isString(item)).toBeTruthy()
      else expect(isString(item)).toBeFalsy()
    })
  })

  test('test isFunction', () => {
    let arr = [() => {}, '1', [1, 2, 3], 1, null, undefined, {}]
    arr.forEach((item: any, index: number) => {
      if (index === 0) expect(isFunction(item)).toBeTruthy()
      else expect(isFunction(item)).toBeFalsy()
    })
  })

  test('test isInArray', () => {
    let arr = [1, 2, 3]
    let arr2 = [1]
    arr.forEach((item: any, index: number) => {
      if (index === 0) expect(isInArray(arr2, item)).toBeTruthy()
      else expect(isInArray(arr2, item)).toBeFalsy()
    })
  })
})
