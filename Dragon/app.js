import Vue from 'vue';
import CommentList from './components/CommentList.vue';
import store from './store';

Vue.config.debug = true;

new Vue({
    el: '#app',
    store,
    render: h => h(CommentList)
});
