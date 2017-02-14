import MAIN_ACTION from '../actions/main.js';

const INITIAL_STATE = {
  list: []
}

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MAIN_ACTION.FETCH_MENU_LIST_END :
      return Object.assign({}, state, {
        list: action.list
      });
    default:
      return state
  }
}
