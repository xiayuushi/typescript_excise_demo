{
  // 1、type可以实现任意数据类型的复用
  type Xxx = {name: string, age: number}
  const xxx: Xxx = {
    name: 'xxx',
    age: 18
  }
  console.log(xxx)
} 

{
  // 2、接口只能实现对象成员类型的复用，且可以通过继承实现复用
  interface Father {
    money: number,
    house: number,
    get(): void
  }
  interface Son extends Father {
    name: string
  }
  const person: Son = {
    name: 'xiaomi',
    money: 1000000000,
    house: 100,
    get(){
      console.log(name)
    }
  }
  console.log(person)
}


{
  // 3、typeof可以根据类型上下文进行复用（已知数据的属性值去复用其属性的类型）
  // A、typeof 复用函数参数时 仅复用函数参数的类型（参数名称不需要保持一致，也不会复用函数返回值类型）
  function plus1 (a:number, b:number):void {
    console.log(a + b)
  }
  const plus2: typeof plus1 = (n1, n2): number => {
    return n1 + n2
  }
  console.log(plus2(100, 100))

  // B、typeof 复用对象成员类型时，必须确保对象成员名称一致且对象成员类型也一致
  const Animal = {
    name: '哈士奇',
    age: 3
  }
  const dog: typeof Animal = {
    name: '中华田园犬',
    age: 10
  }
  console.log(dog)
}

// 01、type定义类型别名，实现任意类型的复用
// 02、interface定义对象类型的复用（仅能实现对象成员的类型复用，且可以通过extends继承实现复用）
// 03、typeof根据已知数据的值作为参数的复用类型（复用对象时必须保证属性名与属性值类型一致，复用函数时仅仅复用函数参数类型）
// N1、如果涉及到对象以外的类型复用，尽量使用type，例如需要使用联合类型时，此时不能使用interface定义类型