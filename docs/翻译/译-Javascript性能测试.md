# 译：Javascript 性能测试- for 对比 for each 对比 (map, reduce, filter, find).

我们都知道 for 循环比for each或者 javascript 函数都要快，因为在 javascript 函数的框架下可能会使用 for 循环或者其他我不确定的东西。 我用一个对象数组做了一个简单的测试，并通过 loop / foreach / javascript 函数执行了一些操作，并观察了执行所需的时间。

> 这些结果来自一些小示例，并且可能根据所执行的操作、选择的执行环境和选择的VM而有所不同。

## 1. Reduce 对比 for loop 对比 foreach
```
// 计算upVotes的和
const posts = [ 
  {id: 1, upVotes: 2},
  {id: 2, upVotes: 18}, 
  {id: 3, upVotes: 1}, 
  {id: 4, upVotes: 30}, 
  {id: 5, upVotes: 50} 
];
let sum = 0;
console.time('reduce');
sum = posts.reduce((s, p)=> s+=p.upVotes,0);
console.timeEnd('reduce')
sum = 0;
console.time('for loop');
for(let i=0; i<posts.length; i++) {
    sum += posts[i].upVotes;
}
console.timeEnd('for loop');
sum = 0;
console.time('for each');
posts.forEach(element => {
    sum += element.upVotes;
});
console.timeEnd('for each');
```

注意：以下是结果列表和代码

所有的结果都清楚地表明 for 循环比 map / reduce / filter / find 更加精通

Map / reduce / filter / Find 由于许多原因而变慢，其中一些原因是
1. 它们有一个回调来执行，以便作为一个开销
1. 函数会考虑很多角落情况，比如 getter、稀疏数组和检查传递的参数是否是数组，这些都会增加开销

> 我找到了一个依赖重新实现了几个常见的本地 JavaScript 函数

但是，使用的选择不仅仅取决于性能，还有更多的因素需要考虑，其中一些是:
1. 代码的可读性和可维护性
1. 简化代码
1. 快速编码
1. 实现与优化
1. 个人选择

就我个人而言，我喜欢 map, reduce, filter, find ，我使用他们很长时间了。 他们帮助我写得干净、精确、快速，并且符合我的思维过程。 当我别无选择时，我才会使用 for 循环。 就优化而言，map / reduce / filter / find replacement 应该是最后一个选项，或者根据需要的优化级别而不是一个选项。

>  注意: 如果您使用循环，总是习惯用法地使用它们，因为编译器现在已经足够聪明，可以正确地优化习惯用法循环

更新: 在这里你可以找到大数据集和繁重计算的结果。

如果你喜欢这篇文章，请推荐和分享，帮助别人找到它