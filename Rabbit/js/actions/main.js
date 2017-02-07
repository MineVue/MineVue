const TEST_ACTION = 'TEST_ACTION';

export testActionsFunc = () => {
	return (dispatch, getState) => {
	    // the following line is always an async ajax call, like:
	    // return fetch().then().then(data => dispatch(addedTodo(data)))
	    // here we use setTimeout to fake one
	    setTimeout(() => {
	      return {
	      	type: TEST_ACTION
	      }
	    }, 1000)
	  }
}
