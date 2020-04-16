import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './router.js';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import App from './views/app.vue';


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
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
