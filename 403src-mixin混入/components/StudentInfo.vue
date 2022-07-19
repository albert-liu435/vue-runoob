<template>
    <!--    组件的结构-->
    <!--    准备好一个容器-->
    <div class="demo">
        <!--    编写组件标签-->
        <div>
            <h1 @click="showName">学生名称：{{name}}</h1>
            <h1>学生年龄：{{age}}</h1>
        </div>

    </div>

</template>

<!--组件交互相关的代码-->
<script>
    // <!--    引入一个混合-->
    import {mixin} from '../mixin'
    //    创建school组件
    export default {
        name:'StudentInfo',
        data() {
            return {//用于存储数据，供el所指定的容器使用
                name:'田雨龙',
                age:18
            }
        },
        mixins:[mixin]

    }

</script>

<!--组件的样式-->
<style>
    .demo {
        background-color: cyan;
    }
</style>
