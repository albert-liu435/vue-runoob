<template>
    <div class="demo">
        <p>使用双大括号的文本插值: {{ rawHtml }}</p>
        <!-- v-html指令用于输出Html代码-->
        <p>使用 v-html 指令: <span v-html="rawHtml"></span></p>
    </div>
    <div>
        <label for="r1">修改颜色</label><input type="checkbox" v-model="use" id="r1">
        <br><br>
        <!--        以下实例判断 use 的值，如果为 true 使用 class1 类的样式，否则不使用该类：-->
        <!-- HTML 属性中的值应使用 v-bind 指令。-->
        <div v-bind:class="{'class1': use}">
            v-bind:class 指令
        </div>
    </div>

    <!--Vue.js 都提供了完全的 JavaScript 表达式支持。-->
    <div>
        {{5+5}}<br>
        {{ ok ? 'YES' : 'NO' }}<br>
        {{ message.split('').reverse().join('') }}
        <div v-bind:id="'list-' + id">菜鸟教程</div>
    </div>

    <!--
        这里， v-if 指令将根据表达式 seen 的值( true 或 false )来决定是否插入 p 元素。
    -->


    <div>
        <label for="v1">选中我就可以看到我了</label>
        <input type="checkbox" v-model="seen" id="v1">
        <p v-if="seen">现在可以看到我了</p>
    </div>

    <!--
        v-for 指令可以绑定数组的数据来渲染一个项目列表：
    -->
    <div>
        <ol>
            <li v-for="site in sites" :key="site">
                {{ site.text }}
            </li>
        </ol>
    </div>

<!--
    参数在指令后以冒号指明。例如， v-bind 指令被用来响应地更新 HTML 属性：
-->

    <div>
        <p><a v-bind:href="url">菜鸟教程</a></p>

    </div>

<!--
    另一个例子是 v-on 指令，它用于监听 DOM 事件：
-->

    <div>
        <!-- 完整语法 -->
        <a v-on:click="doSomething"> ... </a>

        <!-- 缩写 -->
        <a @click="doSomething"> ... </a>

        <!-- 动态参数的缩写 (2.6.0+) -->
        <a @[event]="doSomething"> ... </a>
    </div>

<!--
    在 input 输入框中我们可以使用 v-model 指令来实现双向数据绑定：
-->


    <div>
        <p>{{ inputmessage }}</p>
        <input v-model="inputmessage">
    </div>
</template>

<script>
    export default {
        name: "HtmlTemplate",
        data() {
            return {
                rawHtml: '<span style="color: red">这里会显示红色！</span>',
                use: false,
                ok: true,
                message: 'RUNOOB!!',
                id: 1,
                seen: false,
                sites: [
                    {text: 'Google'},
                    {text: 'Runoob'},
                    {text: 'Taobao'}
                ],
                url: 'https://www.runoob.com',
                inputmessage:'Runoob!'
            }
        }
    }
</script>

<style scoped>
    .class1 {
        background-color: #444;
        color: #eee;
    }
</style>
