import Vue from 'vue';
import Revue from 'revue';
import { createStore, applyMiddleware } from 'redux';;
import thunk from 'redux-thunk';
import reducer from './reducers/index'
import * as actions from './actions/main';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore)

const reduxStore = createStoreWithMiddleware(reducer);

const store = new Revue(Vue, reduxStore, actions);

export default store
