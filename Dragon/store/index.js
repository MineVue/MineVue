import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comments_A: ['hi'],
        comments_B: []
    },
    mutations: {
        addCommentToA (state) {

        },
        addCommentToB (state) {

        }
    }
});
