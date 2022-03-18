
// 01、生成TS配置文件tsconfig.json的指令：tsc --init
// 02、使用脚手架创建的TS项目无需手动生成TS配置文件
// 03、在vue中创建TS项目，只需要在生成Vue项目的时候勾选TS选项即可
// 04、在React中创建TS项目指令：`npx create-react-app 项目名 --template typescript` 
// 05、在React的TS项目中，需要构建JSX的才需要创建`.tsx`为后缀的文件，不需要创建JSX的只需要新建`.ts`即可
// 05、如果JSX不在`.tsx`文件中使用会报错（即，在使用TS书写的React项目中，有JSX结构的地方都必须使用`.tsx`文件）
// 05、没有JSX结构的纯逻辑的可以直接定义`.ts`文件

// N1、TS配置文件tsconfig.json常用配置
// 01、链接参考：https://www.typescriptlang.org/tsconfig