<template>
    <div class="hello">
        <button @click="changeFlag">点击是否可以看到我</button>
<!--
        这里， v-if 指令将根据表达式 seen 的值( true 或 false )来决定是否插入 p 元素。
-->


        <p v-if="seen">现在你看到我了</p>
        <template v-if="!seen">
            <h1>网站</h1>
            <p>Google</p>
            <p>Runoob</p>
            <p>Taobao</p>
        </template>
    </div>


    <div v-if="Math.random() > 0.5">
        随机数大于 0.5
    </div>
    <div v-else>
        随机数小于等于 0.5
    </div>

    <div>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                // msg: "欢迎来到菜鸟教程1"
                seen: true,
                type: "C"
            }
        },
        methods:{
            changeFlag(){
                this.seen=!this.seen
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
