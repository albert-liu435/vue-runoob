<template>
   <!-- <img alt="Vue logo" src="./assets/logo.png">-->
   <!-- <HelloWorld></HelloWorld>-->
    <HtmlTemplate></HtmlTemplate>

</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import HtmlTemplate from "@/components/HtmlTemplate";

    export default {
        name: 'App',
        components: {
            // HelloWorld,
            HtmlTemplate

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
