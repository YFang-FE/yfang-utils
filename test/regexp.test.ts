import { isPhone, isEmail } from '../src/regexp'

describe('regexp test', () => {
  test('test isPhone', () => {
    let arr = [
      '13800138000',
      '132465',
      12,
      '03800038000',
      null,
      undefined,
      13800138000,
      {},
      () => {}
    ]
    arr.forEach((item: any, index: number) => {
      if (index === 0) expect(isPhone(item)).toBeTruthy()
      else expect(isPhone(item)).toBeFalsy()
    })
  })
  test('test isEmail', () => {
    let arr = [
      'zxpscau@163.com',
      '132465',
      12,
      '03800038000',
      null,
      undefined,
      13800138000,
      {},
      () => {}
    ]
    arr.forEach((item: any, index: number) => {
      if (index === 0) expect(isEmail(item)).toBeTruthy()
      else expect(isEmail(item)).toBeFalsy()
    })
  })
})
