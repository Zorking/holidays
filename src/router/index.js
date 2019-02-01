import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'rules',
            meta: {
                title: 'Правила'
            },
            component: function (resolve) {
                require(['@/components/Rules.vue'], resolve)
            }
        },
        {
            path: '/form',
            name: 'form',
            meta: {
                title: 'Форма'
            },
            component: function (resolve) {
                require(['@/components/Form.vue'], resolve)
            }
        },
    ],
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

export default router
