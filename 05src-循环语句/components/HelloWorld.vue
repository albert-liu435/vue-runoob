<template>

    <!--    v-for 可以绑定数据到数组来渲染一个列表：-->


    <div>
        <ol>
            <li v-for="site in sites" :key="site">
                {{ site.text }}
            </li>
        </ol>
    </div>


    <div>
        <ol>
            <li v-for="(site,index) in sites" :key="site">
                {{ index }} -{{ site.text }}
            </li>
        </ol>
    </div>

    <!--
        v-for 可以通过一个对象的属性来迭代数据：
    -->


    <div>
        <ul>
            <li v-for="value in object" :key="value">
                {{ value }}
            </li>
        </ul>
    </div>

    <!--
        你也可以提供第二个的参数为键名：
    -->


    <div>
        <ul>
            <li v-for="(value, key) in object" :key="value">
                {{ key }} : {{ value }}
            </li>
        </ul>
    </div>

    <!--    第三个参数为索引：-->


    <div>
        <ul>
            <li v-for="(value, key, index) in object" :key="value">
                {{ index }}. {{ key }} : {{ value }}
            </li>
        </ul>
    </div>

    <!--
        v-for 也可以循环整数
    -->
    <div>
        <ul>
            <li v-for="n in 10" :key="n">
                {{n}}
            </li>
        </ul>
    </div>


<!--
    我们可以对数组的元素进行处理后再显示出来，一般可以通过创建一个计算属性，来返回过滤或排序后的数组。
-->



    <div>
        <ul>
            <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
        </ul>
    </div>


</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                sites: [
                    {text: 'Google'},
                    {text: 'Runoob'},
                    {text: 'Taobao'}
                ],
                object: {
                    name: '菜鸟教程',
                    url: 'http://www.runoob.com',
                    slogan: '学的不仅是技术，更是梦想！'
                },
                numbers: [1, 2, 3, 4, 5]
            }
        },
        computed: {
            evenNumbers() {
                return this.numbers.filter(number => number % 2 === 0)
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
