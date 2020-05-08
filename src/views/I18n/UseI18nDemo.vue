<template>
    <div>
        <Button @click="change">点我切换语言</Button>
        <span>{{$t('nav.home')}}</span>
    </div>
</template>


<script>
    export default {
        methods:{
            change(){
                console.log(this.$root.API.SAY_HELLO)
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

