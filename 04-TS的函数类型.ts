{
  // 函数
  function printLog (a: number, b: number): void {
    console.log(a + b);
  }
  printLog(200,800)


  // 函数表达式
  const getSum = (a: number, b: number) : number => {
    return a + b
  }
  console.log(getSum(2000,8000))


  // 使用类型别名为多个具有相同类型的参数及返回值的函数表达式定义可复用的类型
  type FnType = (a: number, b:number) => number
  const addCount1: FnType = (a, b) => a + b
  const addCount2: FnType = (c, d) => c * d 
  console.log(addCount1(100,100))
  console.log(addCount2(200,200))


  // 函数可选参数
  const getCount = (a?: number): void => console.log(a);
  getCount()
}


// 01、函数类型必须分别为函数形参与函数返回值指定类型
// 02、函数返回值类型为void时，表示函数无返回值
// 03、当多个函数表达式（不是函数，而是函数表达式）都具有相同类型时，也可以考虑使用type来为函数表达式定义相同的参数及返回值类型进行复用
// 03、使用类型别名为函数表达式定义通用类型，而不是函数类型（注意是函数表达式，而不是函数）
// 03、箭头函数（即函数表达式形式的）通常会使用type类型别名来定义复用类型
// 04、可以使用`?`来为函数参数定义可选参数，注意可选参数只能出现在参数的最后面（即可选参数后面不能出现必须参数）
// 05、函数的可选参数与默认参数不能同时存在，它们互斥（要么是可选，要么是默认参数，不能同时具备）