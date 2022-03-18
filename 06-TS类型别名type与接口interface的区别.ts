{
  // 类型别名 type（可以定义任意类型）
  // type 别名 = 任意数据类型
  type Str = string
  let abc: Str = 'sumber'
}


{
  type Person = {
    name: string,
    age: number,
    time?: boolean,
    // 此处对象内的函数方法是可选的，如果函数会返回该参数，
    // 则定义函数返回值类型时必须是undefined与返回值类型的联合类型
    print(count?: number): number | undefined,
  }

  let student1: Person = {
    name: '44',
    age: 44,
    print: function(count) {
      return count
    }
  }

  let student2: Person = {
    name: '61',
    age: 61,
    print: function(count) {
      return count
    }
  }
  console.log(student1.print(1), student2.print(2))
}


{
  // 接口 interface（只能定义对象类型）
  // interface 接口名 { 对象成员：类型 }
  interface Phone {
    name: string,
    price: number,
    printx(isSale?: boolean): void
  }
  let XiaoMi: Phone = {
    name: '小米',
    price: 999,
    printx: function(isSale){
      console.log(isSale);
    }
  }
  let iPhone: Phone = {
    name: '苹果',
    price: 6999,
    printx: function(isSale) {
      console.log(isSale)
    }
  }
  console.log(XiaoMi, iPhone)
}


{
  // interface可以实现类型继承
  // 如果两个接口有某些对象成员是相同的，则可以通过extends关键字实现接口继承
  // 注意：可以在已有类型继承上进行接口继承，实现对象成员的类型继承，可以新增自己独有的类型，但是不能够去改写或者覆盖继承过来的类型
  interface Father {
    money: number,
    houseCount: number,
    city: string
  }

  interface Son extends Father {
    name: string,
  }

  const xiao: Son = {
    name: 'xiao',
    money: 100000000000,
    houseCount: 100,
    city: '深圳、广州'
  }
  console.log(xiao)
}

{
  // 如果涉及联合类型，则应该使用type，不能使用interface！！(因为interface只能在定义对象类型)
  // 例如：'interface Xxx { key: string } | undefined '这种写法会报错
  type Xxx = { key: string } | undefined
}

// 01、TS可以使用type关键字来定义类型别名，对任意数据的类型进行复用

// 02、TS可以使用interface关键字来定义接口，实现对象成员类型的复用，且interface只能定义对象类型进行复用
// 02、如果两个接口有某些对象成员是相同的，则可以通过extends关键字实现接口继承（可以新增独有类型，但不能更改或者覆盖继承过来的类型）

// N1、使用type或者interface定义对象类型时的注意点
// 01、使用类型别名type或者接口interface定义对象的类型时，如果对象内的函数方法参数是可选的
// 01、如果该对象函数会返回该可选参数，则定义函数返回值类型时必须是undefined与返回值类型的联合类型
// 02、如果涉及联合类型，则应该使用type，不能使用interface！！(因为interface只能在定义对象类型)

// N2、type与interface的区别汇总
// 01、type必须写'='，而interface不能写'='
// 02、类型别名type可以定义任意类型，而接口interface只能定义对象
// 03、类型别名type不能继承，而接口interface可以使用extends进行对象成员的类型继承

// N3、type与interface使用心得
// 01、type能够定义任意类型，interface只能定义对象类型，因此能使用type尽量使用type
// 02、如果需要继承对象成员的类型，则可以使用interface来实现对象成员的类型继承
// 02、interface继承时可以添加独有的新成员的类型，但是不能更改覆盖继承过来的成员类型
// 03、如果涉及到对象以外的类型复用，尽量使用type，例如需要使用联合类型时，此时不能使用interface定义类型