import {
  getProvinces,
  getProvincesDetail,
  getCitys,
  getCitysDetail,
  getDistricts,
  getDistrictsDetail
} from '../src/district'

describe('regexp district', () => {
  test('test getProvinces', () => {
    expect(getProvinces()[0] === '北京市').toBeTruthy()
  })
  test('test getProvincesDetail', () => {
    expect(getProvincesDetail()[0].label === '北京市').toBeTruthy()
  })
  test('test getCitys', () => {
    expect(getCitys('北京市')[0] === '北京市辖区').toBeTruthy()
    expect(getCitys('北京2市').length === 0).toBeTruthy()
  })
  test('test getCitysDetail', () => {
    expect(getCitysDetail('北京市')[0].label === '北京市辖区').toBeTruthy()
    expect(getCitysDetail('北京2市').length === 0).toBeTruthy()
    expect(getCitysDetail('', '110000')[0].label === '北京市辖区').toBeTruthy()
  })
  test('test getDistricts', () => {
    expect(getDistricts('北京市辖区')[0] === '东城区').toBeTruthy()
    expect(getDistricts('北京2市辖区').length === 0).toBeTruthy()
  })
  test('test getDistrictsDetail', () => {
    expect(getDistrictsDetail('北京市辖区')[0].label === '东城区').toBeTruthy()
    expect(getDistrictsDetail('北京2市辖区').length === 0).toBeTruthy()
    expect(getDistrictsDetail('', '110100')[0].label === '东城区').toBeTruthy()
  })
})
