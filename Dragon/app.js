import Vue from 'vue';
import CommentList from './components/CommentList.vue';
import store from './store';

Vue.config.debug = true;

const app = new Vue({
    el: '#app',
    store,
    render: (h) => { return h(CommentList) }
});