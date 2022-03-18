{
  let array1: number[] = [1,2,3,4,5]
  let array2: Array<number> = [2,3,4,5,6]

  let array3: string[] = ['a','b','c','d','e']
  let array4: Array<string> = ['b','c','d','e','f']

  let position1: [number, number] = [1,2] 
  let position2: [number, string] = [1,'2']

  console.log(array1, array2, array3, array4 , position1, position2);
  
}

// 01、TS定义数组类型有两种写法。此处以数值元素数组类型为例：简单写法（number[]）与泛型写法（Array<number>）
// 02、数组的元素必须符合TS定义时的数组类型，否则会报错
// 03、数组类型与元祖类型的区别：元祖就是特殊的数组，元祖有明确的元素个数及对应的类型