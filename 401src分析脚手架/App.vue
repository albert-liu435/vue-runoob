<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <SchoolInfo></SchoolInfo>
        <StudentInfo></StudentInfo>
    </div>

</template>

<!--组件交互相关的代码-->
<script>
    // <!--    引入组件-->
    import SchoolInfo from './components/SchoolInfo'
    import StudentInfo from './components/StudentInfo.vue'

    export default {
        name: 'App',
        components: {
            SchoolInfo,
            StudentInfo
        }
    }

</script>

<!--组件的样式-->
<style>

</style>
