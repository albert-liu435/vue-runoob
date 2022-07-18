<template>

<div v-bind:class="{ 'active': isActive }"></div>

    <div>
        分开
    </div>
    <div :class="{ 'active': isActive }"></div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                isActive: true
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
