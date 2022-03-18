{
  // 已知position的属性类型，后续count对象复用position对象的属性以及属性值类型
  //  复用对象时，必须确保对象的属性名完全一致且对象属性值的类型也一致（属性值可以不同）
  const position = {
    x: 100,
    y: 100
  }

  const count: typeof position = {
    x: 200,
    y: 400
  }
  console.log(count)
}


{
  // 已知add的参数类型，后续sub函数表达式复用add函数的参数与参数值类型
  // 复用函数时，只是复用参数的类型（因此函数参数名称不需要保持一致，函数返回值类型也不会被复用）
  function add (n1: number, n2:number):void {
    console.log(n1 + n2)
  }
  const sub: typeof add = (x, y) => {
    return x + y
  }
  console.log(sub(1000, 1000))
}

// N1、TS中的typeof有两种用法
// 01、用法1 用于检测简单数据类型（这点与JS中的typeof一致）
// 01、用法2 复用属性或者参数类型（复用对象时，会同时复用属性名与属性值类型；复用函数时仅复用函数参数类型）

// N2、TS中typeof复用属性或者参数类型时的注意点
// 01、typeof复用对象时，会同时复用对象的属性名称与属性值类型
// 02、typeof复用函数时，只是复用函数参数值类型（不会复用函数的参数名称以及函数返回值类型）
// 03、typeof复用类型时，只能出现在类型注解的位置（冒号的后面）

// N3、typeof的使用场景（根据类型上下文去引用参数的类型）
// 01、根据已有数据的值，去复用其类型，可简化类型定义的书写