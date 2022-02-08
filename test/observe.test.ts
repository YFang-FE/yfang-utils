import observe from '../src/observe'

/**
 * Dummy test
 */
describe('observe test', () => {
  it('测试对象字面量', () => {
    function observeTest() {
      var obj = { a: 1 }
      let result = ''
      // @ts-ignore
      observe(obj, function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old
      })
      obj.a = 2 //a__2__1
      return result
    }
    expect(observeTest()).toBe('a__2__1')
  })
  it('测试改变对象里的空数组', () => {
    function observeTest() {
      var obj = { a: [] }
      let result = ''
      // @ts-ignore
      observe(obj, 'a', function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old
      })
      ;(<number[]>obj.a).push(2)
      return result
    }
    expect(observeTest()).toBe('Array-push__2__')
  })
  it('test observe normal object with arr to be an array', () => {
    function observeTest() {
      var obj = { a: 1 }
      let result = ''
      // @ts-ignore
      observe(obj, ['a'], function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old
      })
      obj.a = 2 //a__2__1
      return result
    }
    expect(observeTest()).toBe('a__2__1')
  })
  it('test observe normal object with arr to be a string', () => {
    function observeTest() {
      var obj = { a: 1 }
      let result = ''
      // @ts-ignore
      observe(obj, 'a', function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old
      })
      obj.a = 2 //a__2__1
      return result
    }
    expect(observeTest()).toBe('a__2__1')
  })

  it('test observe empty array', () => {
    function observeTest() {
      let result = ''
      var obj: Array<any> = []
      // @ts-ignore
      observe(obj, function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old
      })
      obj.push(1) //a__2__1
      return result
    }
    expect(observeTest()).toBe('Array-push__1__')
  })

  it('test observe normal array push', () => {
    function observeTest() {
      var arr = [1, 2, 3]
      let result = ''
      // @ts-ignore
      observe(arr, function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old
      })
      arr.push(4) //Array-push__1,2,3,4__1,2,3
      return result
    }
    expect(observeTest()).toBe('Array-push__1,2,3,4__1,2,3')
  })

  it('test observe normal array change item', () => {
    function observeTest() {
      var arr = [1, 2, 3, 4]
      let result = ''
      // @ts-ignore
      observe(arr, function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old
      })
      arr[3] = 5 //3__5__4
      return result
    }
    expect(observeTest()).toBe('3__5__4')
  })

  it('test observe Complex object', () => {
    function observeTest() {
      let result = ''
      var complexObj = { a: 1, b: 2, c: [{ d: [4] }] }
      // @ts-ignore
      observe(complexObj, function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old + '__' + path
      })
      complexObj.c[0].d = [100]
      return result
    }
    expect(observeTest()).toBe('d__100__4__#-c-0')
  })

  it('测试深层次属性的空数组', () => {
    function observeTest() {
      let result = ''
      var complexObj = { a: 1, b: 2, c: [{ d: [] }] }
      // @ts-ignore
      observe(complexObj, function(name: string, value: any, old: any, path?: string) {
        result = name + '__' + value + '__' + old + '__' + path
      })
      ;(<number[]>complexObj.c[0].d).push(1)
      return result
    }
    expect(observeTest()).toBe('Array-push__1____#-c-0')
  })

  it('test observe object', () => {
    function observeTest() {
      let result = ''

      class User {
        name: string
        age: number
        constructor(name: string, age: number) {
          this.name = name
          this.age = age
          //只监听name
          observe(this, ['name'], function(name: string, value: any, old: any, path?: string) {
            result = name + '__' + value + '__' + old
          })
        }
      }
      var user: any = new User('lisi', 25)
      user.name = 'wangwu' //name__wangwu__lisi
      user.age = 20 //什么都输出，因为没有监听age
      return result
    }
    expect(observeTest()).toBe('name__wangwu__lisi')
  })
})
