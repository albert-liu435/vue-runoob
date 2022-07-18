<template>

<!--
    v-for/v-if 联合使用
-->

    <div>
        <select @change="changeVal($event)" v-model="selOption">
            <template v-for="(site,index) in sites" :site="site" :index="index" :key="site.id">
                <!-- 索引为 1 的设为默认值，索引值从0 开始-->
                <option v-if="index == 1" :value="site.name" selected>{{site.name}}</option>
                <option v-else :value="site.name">{{site.name}}</option>
            </template>
        </select>
        <div>您选中了:{{selOption}}</div>
    </div>
</template>

<script>
    export default {
        name: "VforTemplate",
        data() {
            return {
                selOption: "Runoob",
                sites: [
                    {id: 1, name: "Google"},
                    {id: 2, name: "Runoob"},
                    {id: 3, name: "Taobao"},
                ]
            }

        },
        methods: {
            changeVal: function (event) {
                this.selOption = event.target.value;
                alert("你选中了" + this.selOption);
            }
        }
    }
</script>

<style scoped>

</style>
