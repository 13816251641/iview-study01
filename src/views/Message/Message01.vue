<template>
    <div>
        <Button @click="time">Displays a 10 second prompt</Button>
        <Button @click="useGet">get</Button>
        <Button @click="usePost">post</Button>
        <Button @click="useVuex">使用Vuex</Button>
        <Button @click="useVuex">使用watch关键字</Button>
        <Button @click="useExport">导出数据</Button>
        <input type="text" v-model="form.msg">
        <el-button type="danger">危险按钮</el-button>

        <Child></Child>
    </div>
</template>

<script>


    export default {
        name: 'Message01',
        data(){
            return {
                form:{
                    msg:'hello'
                }
            }
        },
        watch:{
            'form.msg'(c){
                console.log(c);
            }
        },
        methods:{
            useVuex(){
                this.$store.commit('increment');
                alert(this.$store.state.count); // -> 1
                let doneTodos = this.$store.getters.doneTodos;
                console.log(doneTodos);
            },
            useGet(){
                this.http.get('/hello',{
                    'name':'wahaha',
                    'age': 28
                }).then(res=>{
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
            },
            useExport(){
                let param = {
                    name: 'zhangsan',
                    age: 24
                }
                /* $excelRequest是post请求方式 */
                this.$excelRequest('http://localhost:8080/vue/export', param);

            }
        }
    }
</script>