import { isPhone } from '../src/yfang-utils'

/**
 * Dummy test
 */
describe('observe test', () => {
  it('测试能否使用方法', () => {
    expect(isPhone('123456')).toBe(false)
    expect(isPhone('13800138000')).toBe(true)
  })
})
