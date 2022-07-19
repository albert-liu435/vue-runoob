import { createApp } from 'vue'
import App from './App.vue'

//传递给 createApp 的选项用于配置根组件。在使用 mount() 挂载应用时，该组件被用作渲染的起点。
//createApp(App).mount('#app')
const app=createApp(App);
app.directive('focus',{
    //https://www.jb51.net/article/251168.htm

    // 指令的生命周期和组件的生命周期类似：

//     created：在绑定元素的属性前，或者事件监听器应用前调用
// beforeMount：在元素被插入到DOM前调用，例如我们想要实现输入框的自动聚焦，就不能在beforeMount钩子中实现
// mounted：在绑定元素的父组件以及自己的所有子节点都挂载完毕后调用，这个时候DOM已经渲染出来，我们实现输入框自动聚焦也是在这个钩子函数中实现
// beforeUpdate：绑定元素的父组件更新前调用
// updated：在绑定元素的父组件以及自己的所有子节点都更新完毕后调用
// beforeUnmount：绑定元素的父组件卸载前调用
// unmounted：绑定元素的父组件卸载后调用

    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted(el) {
        el.focus();
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    }



    // mounted(el){
    //     el.focus();
    // }
})

app.mount('#app')
