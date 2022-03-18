{
  // 泛型接口
  interface Xxx<T> {
    name: T,
    age: number
  }
  const user: Xxx<string> = {
    name: '1',
    age: 18
  }
  console.log(user)
}

// 01、数组就是最常见的泛型接口，即数组的泛型接口写法 Array<number> 等同于 number[]