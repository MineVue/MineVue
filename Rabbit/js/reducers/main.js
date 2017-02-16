import * as MAIN_ACTION from '../actions/main';

const INITIAL_STATE = {
  list: []
}

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MAIN_ACTION.FETCH_MENU_LIST_END :
        const list = state.list
        for (let i = 0; i < action.list.length; i++) {
            list.push(action.list[i]);
        }
        return Object.assign({}, state, {
            list
        });
    default:
      return state
  }
}
