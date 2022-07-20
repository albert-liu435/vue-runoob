<template>
    <!--    组件的结构-->
    <!--    准备好一个容器-->
    <div class="demo">
        <!--    编写组件标签-->
        <div>
            <h1>学校名称：{{schoolName}}</h1>
            <h1>学校地点：{{schoolAddress}}</h1>
        </div>

    </div>

</template>

<!--组件交互相关的代码-->
<script>
    //    创建school组件
    export default {
        name:'SchoolInfo',
        data() {
            return {//用于存储数据，供el所指定的容器使用
                schoolName: '江南大学',
                schoolAddress: '江苏无锡'
            }
        }

    }

</script>

<!--组件的样式-->
<style lang="less">
    .demo {
        background-color: cyan;
    }
</style>
