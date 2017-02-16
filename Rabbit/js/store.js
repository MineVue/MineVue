import Vue from 'vue';
import Revue from 'revue';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index'
import * as actions from './actions/main';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore)

const reduxStore = createStoreWithMiddleware(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const action = bindActionCreators(actions, reduxStore.dispatch);

const store = new Revue(Vue, reduxStore, action);

export default store
