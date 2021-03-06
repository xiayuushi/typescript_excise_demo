{
  // 不可能存在同时是number与string的类型，因此该类型是never
  type Custom = number & string
  function test():Custom {
    while(true){
      console.log(1)
    }
  }
}

// 01、交叉类型'&'，表示必须同时满足的类型（交叉类型相当于JS中的逻辑与）
// 02、交叉类型'&'，相反的就是联合类型'|'（联合类型相当于JS中的逻辑或）
// 03、交叉类型'&'，结果通常就是 never （凡是看到never，则表示该类型可能不存在，需要检查代码是否出错）
// 04、如果将函数返回值类型定义为 never 则表示该函数出错或者出现死循环
// 05、凡是看到TS出现never提示，则可能出现了错误或者函数死循环等情况，此时就应该检查代码是否有问题