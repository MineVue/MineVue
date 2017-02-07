import Vue from 'vue';
import Root from './Root.vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello/Hello.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{path: '/', component: Hello}
	]
})
new Vue({
    el: '#app',
    router,
    render: h => h(Root)
});
