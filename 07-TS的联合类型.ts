{
  // 数据必须是 string类型 或者 number类型
  let state: string | number = 123
  state = 'summer'
}


{
  // 数据必须是数组类型，且数组的元素可以是string类型 或者 number类型
  let list: (string | number)[] = [1, '2', 3, 4]
}


{
  // 数据可以是字符串 或者 元素均为number类型的数组
  let data: string | number[] = 'data'
  data = [1, 2, 3, 4]
}


{
  // 定时器或者计时器ID一般需要使用联合类型
  let timeID: null | number | any = null
  timeID = setTimeout(()=>{
    clearTimeout(timeID)
    // 其他逻辑...
  }, 1000)
}


{ 
  // 联合类型通常会与类型别名及其他类型（例如字面量类型）一起配合使用
  type Direction = 'UP' | 'DOWN' |'LEFT' | 'RIGHT'
  const getDirection = (direction: Direction):void => {
    console.log(direction);
  }
  getDirection('UP')
}

// 01、TS中使用'|'来表示联合类型，意思是或者
// 02、联合类型的符号运算级别不高，如果要限定，尽量使用小括号将其括起来

// N1、联合类型的使用场景
// 01、定时器id（一开始是null后续需要重新赋值为其他的）
// 02、与类型别名及其他TS类型配合使用（如字面量类型）
