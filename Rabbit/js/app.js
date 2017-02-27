import Vue from 'vue';
import Root from './Root.vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello/Hello.vue';

import BasicTable from './domain/tables/basicTable.component.vue';
import Pagination from './domain/tables/pagination.component.vue';
import Modal from './domain/ui/modal.ui.component.vue';
import Button from './domain/ui/buttons.ui.component.vue';

Vue.use(VueRouter);

window.Vue = Vue;

const router = new VueRouter({
	routes: [
		{path: '/', component: Hello},
        {path: '/tables/basic', component: BasicTable},
        {path: '/tables/pagination', component: Pagination},
        {path: '/ui/modalNoti', component: Modal},
        {path: '/ui/buttons', component: Button}
	]
})

new Vue({
    el: '#app',
    router,
    render: h => h(Root)
});
