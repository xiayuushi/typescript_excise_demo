{
  // 直接自定义值作为类型，就是一个字面量类型
  let str1:'HELLO' = 'HELLO'
  let str2: '男' | '女' = '女'
}


{
  // let声明的根据TS类型推断是string类型（因为let声明的变量可变）
  // const声明的根据TS类型推断是字面量类型Xxx（因为const声明的是常量，简单类型时它的值不可变）
  let xxx = 'Xxx'
  const aaa = 'Xxx'
}


{
  // 与类型别名及联合类型搭配使用，可以作为函数参数的'御用值'（能够有更加友好的实参值提示）
  type Direction = 'up' | 'down' | 'left' | 'right'
  const printDirection = (direction: Direction):void =>  {
    console.log(direction)    
  }
  printDirection('up')
}


{
  // 在react项目使用redux中提交actions时，通常也会使用字面量类型来代替actionType定义action.type
  type ActionType = 'ADD_TODO' | 'DEL_TODO' | 'CHANGE_TODO'
  type stateType = number | undefined
  const reducer = (state: stateType, action:ActionType): stateType => {
    if (action === 'ADD_TODO') {
      return state
    }
  }
}

// 01、字面量类型可以自己定义，即 变量:自定义的值
// 02、后续自定义的值就是一个字面量类型
// 03、字面量类型通常会与类型别名以及联合类型一起配合使用
// 04、const声明的是常量，值为简单类型时不会发生变化，因此常量的值是简单类型时通常是字面量类型

// N1、字面量类型的使用场景
// 01、用于表示一组明确的可选值列表（如方向上下左右之一，如男女性别之一）