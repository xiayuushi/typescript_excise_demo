
// 自定义类型声明文件流程参考
// st1、创建类型声明文件 xxx.d.ts
// st2、在xxx.d.ts中书写类型声明并将该类型声明导出
// st3、在需要使用到共享类型声明的地方导入使用（缩略.d.ts后缀名）

// N1、创建.d.ts尽量与项目某个文件.ts命名保持一致
// 例如：项目文件名为index.ts，那么将其对应的类型声明文件命名为index.d.ts 

// N2、书写类型声明注意：使用declare来为已经存在的变量明确类型
// 例如：type Person = { id:number; name:string; flag:boolean }
// 例如：declare let xxx: number
// 例如：export { Person, xxx }

// N3、导入类型声明文件时必须省略`.d.ts`的文件后缀名，否则会报错
// N4、缩略文件后缀名，需要使用webpack去配置resolve.extensions文件别名
// 例如：import { Person, xxx } from "./xxx/不带.d.ts后缀名"