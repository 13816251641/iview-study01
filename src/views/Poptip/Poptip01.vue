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
                if (this.$i18n.locale === 'zh' ) {
                    this.$i18n.locale = 'en';//关键语句
                } else {
                    this.$i18n.locale = 'zh';//关键语句
                }
            }
        }
    }
</script>