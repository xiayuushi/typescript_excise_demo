{
  // TS分别为对象成员添加类型
  let Person1: {} = {}
  console.log(Person1)

  let Person2: {name: string, age: 18, sayHi(): void} = {
    name: '刘诗诗',
    age: 18,
    sayHi() {
      console.log('sayHi');
    }
  }
  console.log(Person2)
  

  // 使用类型别名type来定义可复用的对象类型
  type ColorType = {
    red: string,
    pink?: string,
    getColor(color?: string): void
  }
  let colors1: ColorType = {
    red: 'red',
    pink: 'pink',
    getColor (x) {
      console.log(x)
    }
  }
  let colors2: ColorType = {
    red: '#f00',
    pink: '#f88',
    getColor (y) {
      console.log(y)
    }
  }
  colors1.getColor('红色')
  colors2.getColor('粉色')


  // 使用接口interface来定义可复用的对象类型
  interface Girl {
    name: string,
    age?  : number,
    goShopping(goods?: string): number,
  }
  let LeYi: Girl = {
    name: '61',
    age: 61,
    goShopping(){
      return 61
    }
  }
  let ShiShi: Girl = {
    name: '44',
    age: 44,
    goShopping(goods) {
      console.log(goods);
      return 44
    }
  }
  console.log(LeYi);
  console.log(ShiShi.goShopping('手机'));
}

// 01、JS中的对象成员包括属性与方法，因此TS中会对属性与方法添加类型
// 02、对于具有相同类型的属性及方法，可以使用type类型别名或者interface接口来定义类型复用
// 03、定义对象属性类型时，为对象属性名后添加'?'，表示该对象属性是可选属性