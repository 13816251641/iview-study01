import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import ZH from './common/lang/zh.js';
import EN from './common/lang/en.js';
import routes from './router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './views/app.vue';
import {mixin} from '@/common/api/loadService';
import http from '../config/http.js'   //axios实例化后引入取名http
import Vuex from 'vuex';
import $ from 'jquery';
import * as cookieUtils from '@/common/utils/cookie';


Vue.prototype.http = http;   //放入全局

Vue.prototype.lujieni='happy';
Vue.use(cookieUtils.default); //cookie操作

Vue.prototype.$excelRequest = function (reqUrl, params) {
    let myform = $('<form></form>');
    myform.attr('method', 'post')
    myform.attr('action', reqUrl);
    for (let key in params) {
        // 要维持value="123" 这样的语法格式
        myform.append('<input type="hidden" name="' + key + '" value="' + params[key] + '" />');
    }
    /* appendTo->body这一步不可少 */
    myform.appendTo('body').submit();
    myform.remove();//删除form元素
}


/* 插件的使用 */
Vue.use(VueI18n)
Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(Vuex);


/* The routing configuration */
const RouterConfig = {
    routes
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


let store = new Vuex.Store({
    state: {
        count: 0,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: false }
        ]
    },
    mutations:{
        increment (state) {
            state.count++
        }
    },
    actions:{
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(item => {
                return item.done === false;
            })
        }
    }
});

new Vue({
    el: '#app',
    router: router,
    i18n:i18n,
    mixins:[mixin],
    store,
    render: h => h(App)
});
