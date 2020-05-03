<template>
    <div>
        <!--Poptip和Button都是iview的组件-->
        <Poptip trigger="hover" title="Title" content="content">
            <Button>Hover</Button>
        </Poptip>
        <Poptip title="Title" content="content">
            <Button>Click</Button>
        </Poptip>
        <Poptip trigger="focus" title="Title" content="content">
            <Button>Focus</Button>
        </Poptip>
        <Poptip trigger="focus" title="Title" content="content">
            <Input placeholder="Input focus" />
        </Poptip>
        <Hello></Hello>
        <Button @click="change"></Button>
        <span>{{$t('nav.home')}}</span>
    </div>
</template>
<script>
    import Hello from '@/views/MyView/Hello.vue'//自己定义的组件
    export default {
        /*
            局部注册:自己定义的组件必须要注册
         */
        components:{
            Hello
        },
        data(){
            return {

            }
        },
        methods:{
            change(){
                let language = '';

                if (this.$i18n.locale === 'zh-CN' ) {
                    this.$i18n.locale = language = 'en';//关键语句
                } else {
                    this.$i18n.locale = language = 'zh-CN';//关键语句
                }
                window.localStorage.setItem('language',language);//存储在storage中防止用户刷新界面后语言失效
            }
        }
    }
</script>