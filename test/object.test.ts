import { deepClone, isEquals, stringfyQueryString, randomNum, formatDate } from '../src/object'

describe('object test', () => {
  test('test isEquals', () => {
    let arr = [
      {
        a: {
          a: {
            b: 1
          }
        },
        b: {
          a: {
            b: 1
          }
        }
      },
      {
        a: {
          a: {
            b: 1
          },
          b: 1
        },
        b: {
          a: {
            b: 1
          }
        }
      },
      {
        a: new Date('2020/11/12'),
        b: new Date('2020/11/13')
      },
      {
        a: 0,
        b: false
      },
      {
        a: [],
        b: () => {}
      }
    ]
    arr.forEach((item: any, index: number) => {
      if (index === 0) expect(isEquals(item.a, item.b)).toBeTruthy()
      else expect(isEquals(item.a, item.b)).toBeFalsy()
    })
  })
  test('test deepClone', () => {
    let arr = [{ a: 1, b: 2 }, [1, 2, 3, 5]]
    arr.forEach((item: any) => {
      expect(isEquals(deepClone(item), item)).toBeTruthy()
    })
  })

  test('test stringfyQueryString', () => {
    let arr = [
      {
        a: { a: 1, b: 2 },
        b: 'a=1&b=2'
      },
      {
        a: { a: [1, 2, 3, 4] },
        b: 'a%5B0%5D=1&a%5B1%5D=2&a%5B2%5D=3&a%5B3%5D=4'
      }
    ]
    arr.forEach((item: any) => {
      expect(stringfyQueryString(item.a) === item.b).toBeTruthy()
    })
    expect(stringfyQueryString(false) === '').toBeTruthy()
  })

  test('test randomNum', () => {
    let arr: any[] = [
      [1, 10],
      [1, '10']
    ]
    for (let i = 0; i < 100; i++) {
      let num = randomNum(arr[0][0], arr[0][1])
      expect(num >= arr[0][0] && num <= arr[0][1]).toBeTruthy()
    }
    expect(randomNum(arr[1][0], arr[1][1]) === 0).toBeTruthy()
  })

  test('test formatDate', () => {
    let arr = [
      {
        test: [null, 'yyyy-MM-dd hh:mm:ss'],
        value: '--'
      },
      {
        test: ['2020-12-12 12:59:59', 'yyyy-MM-dd'],
        value: '2020-12-12'
      },
      {
        test: ['2020-12-12 12:59:59', 'yyyy-MM-dd hh'],
        value: '2020-12-12 12'
      },
      {
        test: ['2020-12-12 12:59:59', 'yyyy-MM-dd hh:mm'],
        value: '2020-12-12 12:59'
      },
      {
        test: ['2020-12-12 12:59:59', 'yyyy-MM-dd hh:mm:ss'],
        value: '2020-12-12 12:59:59'
      },
      {
        test: ['2018-12-12 12:59:59', 'yy-MM-dd hh:mm:ss'],
        value: '18-12-12 12:59:59'
      },
      {
        test: ['2020-12-12 12:01:01', 'yyyy-MM-dd hh:m:s'],
        value: '2020-12-12 12:1:1'
      },
      {
        test: ['1607749199000', 'yyyy-MM-dd hh:mm:ss'],
        value: '2020-12-12 12:59:59'
      }
    ]
    arr.forEach((item: any) => {
      expect(formatDate(item.test[0], item.test[1]) === item.value).toBeTruthy()
    })
    expect(formatDate('2020-12-12 12:59:59') === '2020-12-12 12:59:59').toBeTruthy()
  })
})
