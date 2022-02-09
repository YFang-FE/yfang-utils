import { isArray, isString, isFunction, type } from '../src/type'

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

  test('test type', () => {
    const arr = [
      {
        value: 1,
        type: 'number'
      },
      {
        value: '1',
        type: 'string'
      },
      {
        value: { a: 1 },
        type: 'object'
      },
      {
        value: [1],
        type: 'array'
      },
      {
        value: null,
        type: 'null'
      },
      {
        value: undefined,
        type: 'undefined'
      },
      {
        value: () => {},
        type: 'function'
      },
      {
        value: true,
        type: 'boolean'
      },
      {
        value: true,
        type: 'boolean'
      }
    ]
    arr.forEach((item: any, index: number) => {
      expect(type(item.value) === item.type).toBeTruthy()
      // else expect(isFunction(item)).toBeFalsy()
    })
  })
})
