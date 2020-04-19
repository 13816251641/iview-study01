import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import ZH from './common/lang/zh.js';
import EN from './common/lang/en.js';
import Routers from './router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import App from './views/app.vue';


Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(VueRouter);
Vue.use(ViewUI);

/*
    import {arrow} from "./arrow.js";
    arrow();//abcd
*/

// The routing configuration
const RouterConfig = {
    routes: Routers
};


const i18n = new VueI18n({
    locale: 'zh',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh': ZH,   // 中文语言包
        'en': EN    // 英文语言包
    }
});


const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    i18n:i18n,
    render: h => h(App)
});
