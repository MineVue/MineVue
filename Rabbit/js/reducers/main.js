import * as MAIN_ACTION from '../actions/main';

const INITIAL_STATE = {
  list: [],
  people: []
}

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case MAIN_ACTION.FETCH_MENU_LIST_END :
        const list = state.list
        if (list.length === 0) {
          for (let i = 0; i < action.list.length; i++) {
              list.push(action.list[i]);
          }
        }

        return Object.assign({}, state, {
            list
        });
    case MAIN_ACTION.FETCH_USER_LIST_END :
        const people = state.people;
        if (people.length === 0) {
          for (let i = 0; i < action.people.length; i++) {
            people.push(action.people[i]);
          }
        }

        return Object.assign({}, state, {
          people
        });
    default:
      return state
  }
}
