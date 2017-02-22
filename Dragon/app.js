import Vue from 'vue';
import Plalab from './components/Plalab.vue';
import store from './store';

Vue.config.debug = true;

// npm의 vue는 runtime-only build
const app = new Vue({
    el: '#app',
    store,
    render: (h) => { return h(Plalab) }
});
