{
  // 未进行类型断言或者类型收窄的unknown类型的数据
  // 在使用属性或者调用方法时会报错'类型unknown上不存在属性toFixed'
  let xxx:unknown

  xxx = 'a'
  xxx = 123
  xxx.toFixed()
}

{
  // 使用unknown类型的数据之前必须对该数据进行类型断言或者类型收窄
  // 类型断言：尽量使用 `值 as 类型` 的语法
  // 对于'()'或者'[]'开头的的语句，在这些括号或者中括号前的语句前必须加上分号避免报错
  let xxx:unknown
  xxx = 123;
  console.log((xxx as number).toFixed())
}

{
  // 使用unknown类型的数据之前必须对该数据进行类型断言或者类型收窄
  // 类型收窄：判断某个值为某个类型，然后进行相应的类型属性或者方法调用
  // 对于'()'或者'[]'开头的的语句，在这些括号或者中括号前的语句前必须加上分号避免报错
  let xxx:unknown
  xxx = 123;
  if(typeof xxx === 'number') {
    console.log(xxx.toFixed())
  }
}


// 01、TS的unknown类型与any类型一样，可以随意更改为不同类型的赋值，可以理解为'更加安全的any类型'
// 02、TS中如果将某个数据的类型定义为unknown类型，则该数据在使用前必须进行类型断言或者类型收窄
// 03、没有进行类型断言或者类型收窄的unknown类型数据无法调用任何属性或者方法
// 03、类型断言：断言类型为某个更为具体的类型
// 03、例如想使用xxx这个数据的length属性，则 (xxx as string).length  
// 04、类型收窄：将某个比较宽泛的类型先判断收缩范围为更具体的类型
// 04、例如想使用xxx这个数据的toFixed()，则 if(typeof xxx==='number'){ xxx.toFixed() }