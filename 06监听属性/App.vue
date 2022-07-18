<template>
   <!-- <img alt="Vue logo" src="./assets/logo.png">-->
    <div id="app">


    <HelloWorld ></HelloWorld>

<!--    <VforTemplate></VforTemplate>-->

    </div>
</template>

<script>
     import HelloWorld from './components/HelloWorld.vue'
     // import VforTemplate from "@/components/VforTemplate";
    //import HtmlTemplate from "@/components/HtmlTemplate";

    export default {
        name: 'App',
        components: {
            // VforTemplate,
             HelloWorld
            //HtmlTemplate

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
