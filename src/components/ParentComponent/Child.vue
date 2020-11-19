<template>
    <div>
        {{message}} <Button @click="click">点我啊123</Button>
    </div>
</template>


<script>

    export default {
        name: 'Child.vue',
        data(){
            return {
                message : 'this is Child component'
            }
        },
        methods:{
            click(){
                this.$emit('change','change321');//重要
            }
        },
        mounted() {
            alert('Child mounted');
        }
    }


</script>