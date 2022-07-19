<template>
    <div>
        Home
        <button @click="getCars">获取汽车信息</button>
        <div></div>
        <div>
            {{ info }}
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Home",
        data() {
            return {
                info: 'Ajax 测试!!'
            }
        },
        methods: {
            getCars() {
                axios
                    .get('http://localhost:8888/fenshu/feishu/callback')
                    .then(response => (this.info = response.data))
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
