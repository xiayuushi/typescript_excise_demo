import { Direction } from 'readline';
// 1、枚举的使用流程
{
 // st1、定义枚举
 enum Direction { UP, DOWN, LEFT, RIGHT }
 // st2、将枚举名称作为类型注解使用
 const getDirection = (direction: Direction): void => {
   console.log(direction)
 }
 // st2、将枚举成员作为值来使用
 getDirection(Direction.DOWN)
}


// 2、数值枚举存在自增行为
{
  enum Direction { UP=1, DOWN, LEFT, RIGHT }
  const getDirection = (direction: Direction):void => {
    console.log(direction)
  }
  getDirection(Direction.UP)
  getDirection(Direction.DOWN)
  getDirection(Direction.LEFT)
  getDirection(Direction.RIGHT)
}


// 3、字符串枚举不会自增，但必须为每个枚举成员设置初始值
{
  enum Gender {
    male = '男',
    female = '女'
  }
  function getGender (gender: Gender) {
    return gender
  }

  console.log(getGender(Gender.female))
}

// 4、枚举成员没有赋值的情况，则下标就是枚举成员的值（此时页可以反过来通过下标来获取枚举成员）
{
  enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
  }
  console.log(Direction.UP);
  console.log(Direction.DOWN);
  console.log(Direction.LEFT);
  console.log(Direction.RIGHT);
  console.log(Direction[0]);
}

// 01、TS中的枚举类型使用enum关键字来定义
// 02、enum枚举类型的功能有点类似字面量与联合类型的结合（也能定义一组明确的可选值列表）
// 03、enum枚举在TS类型中是最特殊的一种，它不仅能作为类型注解使用，也能作为值来使用（其他的只能作为类型注解使用）
// 04、enum枚举名通常以大写字母开头，枚举成员之间以逗号间隔

// enum枚举分类
// 01、enum如果是数字枚举，则它会默认从0开始自增，当然也可以给每个枚举值分别设值防止它进行自增
// 02、enum如果是字符串枚举，则没有自增行为，但字符串枚举必须为每个枚举成员设置初始值
// 03、enum枚举成员如果没有赋初始值，则默认其下标就是枚举成员的值，此时也可以反过来通过下标获取对应的枚举成员

// enum枚举类型与其他类型不一样的区别
// 01、其他类型无法使用console.log()进行打印，而枚举类型可以
// 02、其他类型在被编译为JS后会消失，而枚举类型被编译后不会消失（tsc指令生成js文件可以查看区别）

// enum枚举会被编译为具体的值，因此从性能角度来说，它是不及type的
// 01、能使用type与联合类型定义可选值列表，则可以不使用enum枚举
// type Gender = '男' | '女'
// enum Gender { male='男', female='女' }

// enum数字枚举或者没有赋值的枚举才能相互反过来使用
// enum Xxx { x, y, z } Xxx[0]就是x，xxx.x就是0
// enum Gender { male, female } 此时Gender[0]就是male