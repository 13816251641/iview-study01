<template>
    <div>
        <div :class="{myOrangeColor:flag}">
            这是一个内容,点击按钮样式会切换
        </div>
        <Button @click="click">按钮</Button>


    </div>
</template>
<script>
    export default {
        data(){
            return {
                flag:false
            }
        },
        methods:{
            click(){
                this.flag = !this.flag;
            }
        }
    }
</script>

<style>
    .myOrangeColor{
        background-color:#ff6c0c;
        color:#fff;
    }
</style>