import Grid01 from './views/Grid/Grid01.vue';
import Poptip01 from './views/Poptip/Poptip01.vue';
import Poptip02 from './views/Poptip/Poptip02.vue';
import Layout from './views/Layout/Layout.vue';

const routers = [
    {
        path:'/',
        redirect:'/Layout'
    },
    {
        path: '/Layout',
        component: Layout,
        'children':[
            {path:'Grid01',component:Grid01},
            {path:'Poptip01',component:Poptip01},
            {path:'Poptip02',component:Poptip02}
        ]
    }
];

export default routers;