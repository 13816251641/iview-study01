<template>
    <div>
        <Button @click="time">Displays a 10 second prompt</Button>
        <Button @click="useGet">get</Button>
        <Button @click="usePost">post</Button>
        <el-button type="danger">危险按钮</el-button>
    </div>
</template>

<script>
    export default {
        methods:{
            useGet(){

                alert(this.lujieni);

                this.http.get('/hello',{
                    'name':'wahaha',
                    'age': 28
                }).then(res=>{
                    alert(res);
                    console.log(res.data);
                }).catch(function (res){ //服务端超时、服务端没启动的话都会进入catch
                    console.log('catch');
                    console.log(res);
                });
            },
            usePost(){
                /* 异步请求 */
                this.http.post('/bye',{
                    'name':'wahaha',
                    'age': 28
                }).then(res=>{
                    alert(res);
                    console.log(res.data);
                }).catch(function (res){ //服务端超时的话会进入catch
                    console.log('catch-post');
                    console.log(res);
                });
            },
            time(){
                console.log(process.env);
                console.log(process.env123);
                this.$Message.info({
                    content: 'I will be gone in 10 seconds',
                    duration: 10,
                    closable: true
                });


            }
        }
    }
</script>