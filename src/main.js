import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import ZH from './common/lang/zh.js';
import EN from './common/lang/en.js';
import Routers from './router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import App from './views/app.vue';
import {mixin}  from '@/common/api/loadService';


/* 插件的使用 */
Vue.use(VueI18n)
Vue.use(VueRouter);
Vue.use(ViewUI);

/*
    import {arrow} from "./arrow.js";
    arrow();//abcd
*/

/* The routing configuration */
const RouterConfig = {
    routes: Routers
};


const i18n = new VueI18n({
    locale: window.localStorage.getItem('language')===null?'zh-CN':window.localStorage.getItem('language'), // 语言标识，设置默认语言
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': ZH,   // 中文语言包
        'en': EN    // 英文语言包
    }
});


const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    i18n:i18n,
    mixins:[mixin],
    render: h => h(App)
});
