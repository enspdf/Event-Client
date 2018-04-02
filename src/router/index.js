import Vue from 'vue';
import Router from 'vue-router';
import VueI18n from 'vue-i18n';

import MainPage from '@/pages/MainPage';

Vue.use(Router);
Vue.use(VueI18n);

let router = new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            props: true,
            component: MainPage
        }
    ]
});

export default router;
