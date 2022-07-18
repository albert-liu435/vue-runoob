<template>

    <!--    我们可以使用 v-on 指令来监听 DOM 事件，从而执行 JavaScript 代码。

        v-on 指令可以缩写为 @ 符号。

        语法格式：

        v-on:click="methodName"
        或
        @click="methodName"-->

    <div>
        <button @click="counter += 1">增加 1</button>
        <p>这个按钮被点击了 {{ counter }} 次。</p>
    </div>


    <!--    通常情况下，我们需要使用一个方法来调用 JavaScript 方法。

        v-on 可以接收一个定义的方法来调用。-->

    <div>
        <!-- `greet` 是在下面定义的方法名 -->
        <button @click="greet">点我</button>
    </div>

<!--
    除了直接绑定到一个方法，也可以用内联 JavaScript 语句：
-->



    <div >
        <button @click="say('hi')">Say hi</button>
        <button @click="say('what')">Say what</button>
    </div>

<!--
    事件处理程序中可以有多个方法，这些方法由逗号运算符分隔：
-->

<div>
    <!-- 这两个 one() 和 two() 将执行按钮点击事件 -->
    <button @click="one($event), two($event)">
        点我
    </button>
</div>

</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                counter: 0,
                name: 'Runoob'
            }
        },
        methods: {
            greet(event) {
                // `methods` 内部的 `this` 指向当前活动实例
                alert('Hello ' + this.name + '!')
                // `event` 是原生 DOM event
                if (event) {
                    alert(event.target.tagName)
                }
            },
            say(message) {
                alert(message)
            },
            one(event) {
                alert("第一个事件处理器逻辑...")
            },
            two(event) {
                alert("第二个事件处理器逻辑...")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .active {
        width: 100px;
        height: 100px;
        background: green;
    }
</style>
