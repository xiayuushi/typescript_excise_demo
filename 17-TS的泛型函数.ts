{
  // 涉及到<>就是泛型，泛型函数内的T是变量（类型的变量）
  function fn<T>(data: T): T {
    console.log(data)
    return data
  }
  fn<number>(1)
  fn<string>('1')
}


{
  // 定义泛型变量（此处函数名称后的<Type>就是一个变量）作为类型变量
  // 让调用函数者传入什么类型就返回什么类型，从而实现复用
  // （相比之前固定写一个类型，返回一个固定的类型，实现了复用）
  function getData<Type>(data: Type): Type{
    return data
  }
  console.log(getData(1))
  console.log(getData('1'))
}



{
  // 为函数参数指定为比泛型变量更加具体的类型（直接写在函数参数的类型注解中）
  // 虽然泛型变量T可以是任意类型，但此处限定传入函数参数必须是数组类型
  function getVal<T>(val: T[]): T[] {
    return val
  }
  console.log(getVal([1]))
  console.log(getVal(['1']))


  // 泛型约束：为泛型变量添加约束条件（写在函数名称后'<>'的内部）
  // A、限定泛型变量必须要有某个属性，影响函数传参必须符合该约束
  // 传入给该函数的实参必须有length属性，因此不能传入number类型，因为number类型没有length属性
  interface Length { length: number }
  function count<T extends Length>(params: T): void{
    console.log(params.length);
  }
  count('hello world')

  interface Keys { name: string, age: number }
  function person<T extends Keys> (params: T): T {
    console.log(params.name)
    console.log(params.age)
    return params
  }
  person({name: 'xxx', age: 18})

  
  // B、限定泛型变量源于某个类型或者属性（此处限定P是T类型中的key）
  function getProp<T, P extends keyof T>(obj: T, prop: P):void {
    console.log(obj[prop])
  }
  const animal = { name: 'aaa', age: 100 }
  getProp(animal,'name')
  getProp(animal,'age')
}

// 泛型
// 01、泛型，是确保类型安全的情况下（不丢失类型保护），让函数或接口与多种不同类型一起配合实现类型复用的统称
// 02、泛型，包括泛型函数、泛型接口、以及一些泛型工具
// 03、涉及到泛型就带'<>'，但要区别于TS断言写法中的'<>'

// 泛型函数
// 01、在TS的函数类型比较宽泛的情况下，让传入到函数的实参类型更加明确，方式有两种
// 02、方式1：指定函数参数比泛型变量为更加具体的类型（直接写在函数参数的类型注解中）
// 02、方式2：添加泛型约束（泛型约束写在函数名称后'<>'的内部）
// 03、泛型函数变量在定义时它只是一个类型变量，在调用函数时才会明确变量的具体类型
// 04、调用函数时可以显式的传入具体的类型，如 fn<number>(1)
// 05、调用函数时可以直接传入值，TS会根据类型推断自动明确泛型变量的类型，如 fn(1)
// 05、建议平时调用泛型函数时不传入类型，让TS自动类型推断，除非TS类型推断错误，再显式的传入具体类型
// 06、React中的hook大部分都是泛型函数

// 泛型函数约束
// 01、在函数名称后面添加'<>'来为函数指定泛型变量（函数泛型约束一律写在'<>'内部）
// 02、该泛型变量名称可自定义（它仅仅是一个类型的变量或者条件）
// 03、该变量在定义时无特殊含义，在函数调用时，根据传入的实参值确定泛型变量的具体类型
// 04、可以为泛型函数指定多个泛型变量，例如：function Xxx<T1,T2>(key1: T1, key2: T2):void{ .. }
// 05、添加泛型约束的常用方式：限定泛型变量必须要有某个属性、限定泛型变量源于某个类型（type或者interface定义的可复用类型）

// 泛型函数让实参类型更加明确的两种方式（在书写位置上的区别）
// 01、方式1 为函数参数指定比泛型变量更加具体的类型（重点：将函数参数指定为比泛型变量更加具体的类型）
// 02、方式2 添加泛型约束（重点：所有的泛型约束条件都必须写在函数名称后的'<>'内部）

// 泛型函数<>与断言<>的区分
// 01、函数名后的'<>'内部是变量或者为该变量添加是约束条件，它在函数定义时无意义，调用时擦爱确定为某个具体的类型
// 02、断言写法之一的'<>'内部的是更加具体的类型，即断言比TS自动推断出来的更加具体的类型
