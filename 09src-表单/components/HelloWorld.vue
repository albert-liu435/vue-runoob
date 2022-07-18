<template>

    <!--
        我们可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 等元素上创建双向数据绑定。
    -->

    <!--    v-model 会根据控件类型自动选取正确的方法来更新元素。

        v-model 会忽略所有表单元素的 value、checked、selected 属性的初始值，使用的是 data 选项中声明初始值。

        v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
        text 和 textarea 元素使用 value 属性和 input 事件；
        checkbox 和 radio 使用 checked 属性和 change 事件；
        select 字段将 value 作为属性并将 change 作为事件。-->


    <div>
        <p>input 原始：</p>
        <input v-model="message" placeholder="编辑我.......">
        <p>input表单消息是：{{message}}</p>

        <p>textarea 元素：</p>
        <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
        <p>textarea 表单消息是:</p>
        <p style="white-space: pre">{{ message2 }}</p>
    </div>


    <!--
        复选框如果是一个为逻辑值，如果是多个则绑定到同一个数组：
    -->
    <div>
        <p>单个复选框：</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>

        <p>多个复选框：</p>
        <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
        <label for="runoob">Runoob</label>
        <input type="checkbox" id="google" value="Google" v-model="checkedNames">
        <label for="google">Google</label>
        <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
        <label for="taobao">taobao</label>
        <br>
        <span>选择的值为: {{ checkedNames }}</span>
    </div>

    <!--
        以下实例中演示了单选按钮的双向数据绑定：
    -->


    <div>
        <input type="radio" id="runoob1" value="Runoob" v-model="picked">
        <label for="runoob">Runoob</label>
        <br>
        <input type="radio" id="google1" value="Google" v-model="picked">
        <label for="google">Google</label>
        <br>
        <span>选中值为: {{ picked }}</span>
    </div>


    <!--
        以下实例中演示了下拉列表的双向数据绑定：
    -->

    <div>
        <select v-model="selected" name="site">
            <option value="">选择一个网站</option>
            <option value="www.runoob.com">Runoob</option>
            <option value="www.google.com">Google</option>
        </select>

        <div id="output">
            选择的网站是: {{selected}}
        </div>
    </div>

    <!--
        多选时会绑定到一个数组：
    -->

    <div>
        <select v-model="selected1" name="fruit" multiple>
            <option value="www.runoob.com">Runoob</option>
            <option value="www.google.com">Google</option>
            <option value="www.taobao.com">Taobao</option>
        </select>

        <div id="output1">
            选择的网站是: {{selected1}}
        </div>
    </div>


    <!--
        使用 v-for 循环输出选项：
    -->
    <div>
        <select v-model="selected2">
            <option v-for="option in options" :key="option" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>选择的是: {{ selected2 }}</span>
    </div>


</template>

<script>
    export default {
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
