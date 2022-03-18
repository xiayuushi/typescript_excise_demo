
// 01、`.d.ts`后缀名的都是TS类型声明文件，该文件内部全是类型

// N1、使用declare关键字来自定义类型声明
// 01、只有TS中才能使用的type或者interface等声明符前，可以省略declare关键字
// 02、在JS与TS中都能使用的let、var、function等声明符前，必须使用declare关键字，不能省略
// 03、建议所有的自定义声明前都加上declare关键字（减少记忆负担）

// N2、第三方库通常会有自己的类型声明文件，可以提供更方便的类型提示，方便使用者传参
// 01、如果第三方库比较旧，没有类型声明文件，则可以通过指令安装，如 npm i @types/jquery 
// 02、大部分的第三方库的类型声明安装为 `@types/库名`，因此直接指令安装： npm i @types/库名
// 03、DefinitelyTyped是一个github仓库，用来提供高质量TypeScript类型声明
// 03、DefinitelyTyped参考：https://github.com/DefinitelyTyped/DefinitelyTyped/
// 04、查阅第三方库的类型声明文件安装指令，可参考 https://www.typescriptlang.org/dt 
