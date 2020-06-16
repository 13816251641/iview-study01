<template>
    <Button @click="time">Displays a 10 second prompt</Button>
</template>

<script>
    export default {
        methods:{
            time(){
                console.log(process.env);
                console.log(process.env123);
                this.$Message.info({
                    content: 'I will be gone in 10 seconds',
                    duration: 10,
                    closable: true
                });


                this.http.get('/hello').then(res=>{
                    alert(res);
                    console.log(res.data);
                })
            }
        }
    }
</script>