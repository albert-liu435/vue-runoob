<template>

<div>
    <p style = "font-size:25px;">计数器: {{ counter }}</p>
    <button @click = "counter++" style = "font-size:25px;">点我</button>
</div>

    <div>
        千米 : <input type = "text" v-model = "kilometers">
        米 : <input type = "text" v-model = "meters">
    </div>

</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                kilometers : 0,
                meters:0
            }
        },
        watch: {
            counter:function (nval, oval) {
                alert('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
            },

            kilometers:function(val) {
                this.kilometers = val;
                this.meters = this.kilometers * 1000
            },
            meters : function (val) {
                this.kilometers = val/ 1000;
                this.meters = val;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
