const TEST_ACTION = 'TEST_ACTION';
const FETCH_MENU_LIST_END = 'FETCH_MENU_LIST_END';

export fetchMenuList = () => {
	return (dispatch, getState) => {
	    // the following line is always an async ajax call, like:
	    // return fetch().then().then(data => dispatch(addedTodo(data)))
	    // here we use setTimeout to fake one
	    $.ajax({
	    	url: '/menu.json',
	    	type: 'GET'
	    }).done((data) => {
	    	dispatch({
	    		type: FETCH_MENU_LIST_END,
	    		list: data.list
	    	});
	    }).fail((e) => {
	    	console.log(e);
	    });
	  }
}
