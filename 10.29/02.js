// 作用域: 模块作用域
// setTimeout 属于宏任务还是微任务？
// promise 属于宏任务还是微任务？
// 自己生成的模块可以引用进来
// 变量只在当前的模块生效
for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },0)
}


// 全局对象都不要
// exports（变量抛）      module.exports(对象抛)使用
// 抛出 暴露
// exports和module.exports的区别?
// 1.两者默认都是空对象
// 2.exports是指向module.exports的引用





// Es6      export        module.export