## .d.ts 作用： 
1. 声明文件  别处引用代码时才能获取代码补全 提示，类型定义等功能
2. 用于编译时的检查 不会出现在编译结果中

## type和interface
1. 都可以描述一个对象或函数
2. 都可以扩展， interface用extends ， type用 &
3. Type可以声明基本类型别名，联合类型，元组等类型,interface不行
4. Interface 可以合并声明， type不可重复声明

## extends 和 infer
1. extends  条件类型关键字 分配式 
2. type Diff<T, U> = T extends U ? never : T; // 找出T的差集
3. type Filter<T, U> = T extends U ? T : never; // 找出交集
4. infer 可以推断一个类型变量，在extends 条件语句true的分支中使用
5. 虽然用与不用都可以，但能提升ts推断的效率和代码类型的可读性
