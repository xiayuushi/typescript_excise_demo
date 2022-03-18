{
  let num: any = 12
  num = '12'
  num = true
  num = [1, '2']
  num = { name: 'xxx'}
  console.log(num)
}

// 01、TS的any类型相当于没有启用任何类型机制，可以随意为一个数据进行赋值
// 02、一旦将数据定义为any类型，则不会有任何类型限制，相当于JS