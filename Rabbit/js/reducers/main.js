const INITIAL_STATE = {
  test: {
    test1
  }
}

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TEST_ACTION':
      return Object.assign({}, state, {
        test1: 'test2'
      })
    default:
      return state
  }
}
