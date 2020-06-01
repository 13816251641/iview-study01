<template>
    <Button @click="time">Displays a 10 second prompt</Button>
</template>

<script>
    export default {
        methods:{
            time(){
                console.log(process.env.NODE_ENV);
                this.$Message.info({
                    content: 'I will be gone in 10 seconds',
                    duration: 10,
                    closable: true
                });
            }
        }
    }
</script>