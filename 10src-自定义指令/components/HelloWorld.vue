<template>

<div>
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>


<!--    <p>input 原始：</p>
    <input v-model="message" placeholder="编辑我.......">
    <p>input表单消息是：{{message}}</p>-->
</div>
</template>

<script>
    export default {

        //如果是使用选项式，则自定义指令需要在directives选项中注册。同上一个例子：
        // setup() {},
        // directives: {
        //     // 指令名
        //     focus: {
        //         // 生命周期
        //         mounted(el) {
        //             // 处理DOM的逻辑
        //             el.focus();
        //         },
        //     }
        // }

        name: 'HelloWorld',
        data() {
            return {
                message: '',
                message2: '菜鸟教程\r\nhttps://www.runoob.com',
                checked: false,
                checkedNames: [],
                picked: 'Runoob',
                selected: '',
                selected1: '',
                selected2: 'www.runoob.com',
                options: [
                    { text: 'Runoob', value: 'www.runoob.com' },
                    { text: 'Google', value: 'www.google.com' },
                    { text: 'Taobao', value: 'www.taobao.com' }
                ]

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
