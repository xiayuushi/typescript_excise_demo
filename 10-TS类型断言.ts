{
  // 断言获取的.link元素是 a标签 因此后续使用a标签点出该标签的独有属性时会有提示
  const link = document.querySelector('.link') as HTMLAnchorElement
  link.href = 'https://xxx.com'

  // 断言获取的.img元素是 img标签 因此后续使用img标签点出该标签的独有属性时会有提示
  const img = <HTMLImageElement> document.querySelector('.img')
  img.src = 'https://xxx.jpg'


  // 根据接口文档字段提前定义好type类型别名或者interface接口
  // 并对接收返回对象的变量进行断言，断言该对象的属性与type类型别名的属性一致
  type Person = { name: string, age: number }
  interface Data { status: number, message: string }
  const res1 = <Person>{}
  const res2 = {} as Data
  console.log(res1.age, res2.message)
}

// 01、当TS类型推断出的类型比较宽泛，而我们明确知道更详细的类型时，可以使用类型断言

// 02、TS断言有两种写法：<>或者as
// 02、方式1：'<更加具体的类型> 被断言的数据' 例如 const link = <HTMLDivElement>document.querySelector('a')
// 02、方式2：'被断言的数据 as 更加具体的类型' 例如 const link = document.querySelector('a') as HTMLDivElement
// 02、在react-tsx使用方式1可能无效，且易与TS泛型搞混，因此尽量使用方式2进行断言

// TS断言的应用场景
// 场景1、当获取DOM元素时，如果TS推断的类型太宽泛，导致操作DOM元素时点出的属性没有明确的提示，此时可以进行断言
// 场景2、发送请求时，一开始是会将接收的变量设置为空对象，拿到请求数据修改为有内容的对象（根据接口文档定义类型别名type或接口interface来设置对应的字段）