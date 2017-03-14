import Vue from 'vue';
import store from './store';
import * as actions from './actions';

const app = new Vue({
    created: function() {
        store.dispatch(actions.auth_action.login('01040408403', '352469074382871'));
    }
});
