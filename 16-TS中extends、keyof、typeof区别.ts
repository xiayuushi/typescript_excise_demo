{
  interface Father { money: number, flag: boolean }
  interface Son extends Father { name: string }
  const Person: Son = { name: 'xiaomi', money: 1000000, flag: true }
  console.log(Person)
}


{
  const Person = { name: 'xiaomi', money: 1000000, flag: true }
  const Dog: typeof Person = { name: 'dog', money: 10000, flag: false }
  console.log(Dog)
}


{
  // 此处约束P只能是T类型中的key
  function fn<T, P extends keyof T>(obj: T, prop: P): void {
    console.log(obj[prop]);
  }
  const person = { name: 'xxx', age: 18 }
  fn(person, 'name')
  fn(person, 'age')
}

// 01、extends在TS中表示接口interface之间的继承（接口之间继承实现类型复用）
// 03、typeof在TS中表示通过具体对象取其中属性的类型（由属性名取其对应的类型，用作其他数据的类型注解）
// 03、keyof在TS中表示取key（通常配合extends使用，用于泛型约束）

// N1、typeof在JS中用于检查简单数据的类型 返回值是布尔值 true 或者 false
// N1、typeof在TS中用于获取数据的类型 返回值是TS类型