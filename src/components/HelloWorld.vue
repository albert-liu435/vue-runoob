<template>
    <div class="hello">
        <button @click="increment">点我加1</button>
        <!--数据绑定-->
        <h1>{{count}}</h1>

        <span v-once>这个将不会改变: {{ count }}</span>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        // props: {
        //   msg: String
        // },
        data() {
            return {
                // msg: "欢迎来到菜鸟教程1"
                count: 0
            }
        },
        methods: {
            //方法将count的值加1
            increment() {
                this.count++
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
