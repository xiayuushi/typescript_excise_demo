{
  // 泛型类
  type Xxx<T> = {
    name: T,
    age: number
  }
  const user: Xxx<string> = {
    name: '1',
    age: 18
  }
  console.log(user)
}
