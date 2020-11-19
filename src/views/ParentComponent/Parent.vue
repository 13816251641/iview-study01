<template>
    <div>
        <!--调用子组件-->
        <Child ref="child" @change="fromChild"></Child>
    </div>
</template>
<script>
    import Child from '@/components/ParentComponent/Child.vue'

    export default {
        name: 'Parent',
        components: {
            Child
        },
        data () {
            return {


            }
        },
        methods: {
            fromChild(msg){
                console.log('msg');
                alert(msg);
            }
        }
    }
</script>
