// router.js
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);



const Home = ()=> import('@/views/home/index.vue')//首页
const Detail = ()=> import('@/views/detail/index.vue')//详情页面



// import Home from '@/views/home/index.vue'//首页
// import Detail from '@/views/detail/index.vue'//详情页面

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                path: '/index',
                name: 'index',
                component: Home,
            },
            {
                path: '/detail',
                name: 'detail',
                component: Detail,
            }
        ],
    });
}
