<template>
    <div>
        <div class="static" :class="{ 'active': isActive, 'text-danger': hasError }"></div>
        </div>
</template>

<script>
    export default {
        name: "CommonHello",
        data() {
            return {
                isActive: false,
                hasError: true
            }
        }
    }
</script>

<style scoped>
    .static {
        width: 100px;
        height: 100px;
    }
    .active {
        background: green;
    }
    .text-danger {
        background: red;
    }
</style>
