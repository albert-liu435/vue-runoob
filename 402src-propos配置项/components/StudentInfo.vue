<template>
    <!--    组件的结构-->
    <!--    准备好一个容器-->
    <div class="demo">
        <!--    编写组件标签-->
        <div>
            <h2>{{msg}}</h2>
            <h1>学生名称：{{name}}</h1>
            <h1>学生年龄：{{age}}</h1>
        </div>

    </div>


</template>

<!--组件交互相关的代码-->
<script>
    //    创建school组件
    export default {
        name:'StudentInfo',
        data() {
            return {//用于存储数据，供el所指定的容器使用
                msg:'hello',
            }
        },
        // 简单接受
        // props:['name','age']

        //类型注解
        props:{
            name:String,
            age:Number
        }

    }

</script>

<!--组件的样式-->
<style>
    .demo {
        background-color: cyan;
    }
</style>
