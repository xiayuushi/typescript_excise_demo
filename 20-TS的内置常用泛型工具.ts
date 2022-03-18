{
  // type 全可选属性类型 = Partial<已有类型>
  // 根据已有类型Xxx创建的出来的新类型_Xxx内部的属性都是可选属性
  type Xxx = {
    name: string,
    age: number,
    sale: boolean
  }
  type _Xxx = Partial<Xxx>
}


{
  // type 全仅读属性类型 = Readonly<已有类型>
  // 根据已有类型Xxx创建的出来的新类型_Xxx内部的属性都是可选属性
  type Xxx = {
    name: string,
    age: number,
    sale: boolean
  }
  type _Xxx = Readonly<Xxx>
}

{
  // type 挑选已有类型的某些属性创建出的新类型 = Pick<已有类型, '已有类型中的属性'>
  // 挑选已有类型Xxx中的某些属性，创建出新的类型_Xxx，创建的属性类型与原有属性类型一致
  type Xxx = {
    name: string,
    age: number,
    sale: boolean
  }
  type _Xxx = Pick<Xxx, 'name'|'age'>
}


{
  // type 排除已有类型中的某些属性创建出的新类型 = Omit<已有类型, '已有类型中的属性'>
  // 排除已有类型Xxx中的某些属性，创建出新的类型_Xxx，创建的属性类型与原有属性类型一致
  type Xxx = {
    name: string,
    age: number,
    sale: boolean
  }
  type _Xxx = Omit<Xxx, 'sale' | 'age'>
}


{
  // type 函数返回值类型 = ReturnType<根据已有的函数整体类型>
  function add (n1: number, n2: number): number {
    return n1 + n2
  }

  // typeof在TS中表示通过具体对象取其中属性的类型（由属性名取其对应的类型，用作其他数据的类型注解）
  // 此处typeof先获取函数的整体类型，之后通过ReturnType工具类获取函数的返回值类型
  type Xxx = ReturnType<typeof add>
}


// 01、泛型工具类型，指的是用于统一批量创建新类型的一些工具类型（作用类似于简化类型创建的构造函数）

// N1、常用的泛型根据
// 01、type Xxx = Partial<已有类型>，根据已有类型创建一个类型，且将类型中所有属性变成可选
// 02、type Xxx = Readonly<已有类型> 根据已有类型创建一个类型，且将类型中所有属性变成仅读
// 03、type Xxx = Pick<已有类型, '已有类型中的属性'> 挑选已有类型中的某些属性创建出一个新类型
// 04、type Xxx = Omit<已有类型，'已有类型中的属性'> 排除已有类型中的某些属性创建出一个新类型
// 05、type Xxx = ReturnType<已有的函数或者方法的整体类型> 先通过typeof获取函数或者方法的整体类型，再通过ReturnType获取函数或者方法的返回值类型

// N2、ReturnType<> 在获取redux的根reducer时会非常有效，可以根据store.getState拿到整体根reducer再获取其类型
// N2、ReturnType<> 这种方式获取的redux的根reducer是动态的，后续根reducer即使新增了模块化的reducer也能够自动及时获取
