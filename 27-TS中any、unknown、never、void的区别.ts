{
  // any类型的数据可以随意更改不同类型的值，调用属性或者方法时TS也不会有相关属性或者方法的提示
  let xxx:any
  xxx = 123
  xxx = true
  xxx = '123'
  console.log(xxx.startsWith('1'))
}

{
  // unknown类型的数据可以随意更改不同类型的值，无法在进行类型断言或者类型收窄前调用任何属性与方法
  // unknown类型的数据在类型断言或者类型收窄后，可以调用属性或者方法，且TS会有相应的属性或者方法提示
  let xxx: unknown
  xxx = 123
  xxx = true
  xxx = '123';
  // 类型断言
  console.log((xxx as string).startsWith('1'))

  let aaa: any
  aaa = 123
  // 类型收窄
  if(typeof aaa === 'number'){
    aaa.toFixed()
  }
}

{
  // never类型表示不可能出现的类型，例如不可能有数据同时满足number与string类型
  // 出现never类型，则应该去检查代码是否出错或者函数逻辑是否出现死循环
  type T = string & number
  let xxx: T
  function fn (): T {
    while(true) {
      console.log(1)
    }
  }
}

{
  // void类型表示无返回值，通常用于表示函数无返回值
  function xxx ():void{
    console.log(1)
  }
}

// 01、TS中的any类型，相当于没有任何类型保护，等同于失去了TS类型保护机制
// 01、为一个数据指定为any类型，可以随意赋不同类型的值，则此时相当于就是在纯JS环境中使用，没有任何类型可言
// 01、any类型的数据在使用属性或者方法时，TS不会有任何属性或者方法相关的提示

// 02、TS中的unknown类型，与any类型一样可以随意赋不同类型的值，但unknown类型可以理解为更加安全的any类型
// 02、为一个数据指定为unknown类型，虽然可以赋不同类型的值，但使用该数据时必须先进行类型断言或者类型收窄，否则不能调用任何属性与方法
// 02、只有经过类型断言或者类型收窄后的unknown类型的数据，TS才会有相关的属性或者方法提示

// 03、TS中的never类型，表示不可能实现的类型，一旦提示never类型，则可能出现了死循环或者代码错误
// 03、此时需要检查代码书写是否错误、是否有死循环的情况
// 03、尽量避免出现never类型错误

// 04、TS中的void类型，表示无返回值，通常用于指定函数没有返回值
// 04、当函数没有返回值时，将函数返回值指定为void类型