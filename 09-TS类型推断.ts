{
  // TS会根据值自动推断类型
  let num = 2
  let foo = true
}


{
  // 以下使用const声明的整体都是字面量类型
  const summer = 'summer'
  const boo = false
  const xxx = { name: '姓名' }
}

// 01、给一个变量初始化并赋值时，TS会自动根据初始值去推断类型
// 02、const声明的常量如果不是元素标签，则大部分时候是字面量类型
// 03、如果const声明对象，则该对象整体是字面量类型，但对象内部的键会自动根据值再去推断类型