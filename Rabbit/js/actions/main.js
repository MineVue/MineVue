export const TEST_ACTION = 'TEST_ACTION';
export const FETCH_MENU_LIST_END = 'FETCH_MENU_LIST_END';
export const fetchMenuList = () => {
	console.log('1');
	return (dispatch, getState) => {
	    // the following line is always an async ajax call, like:
	    // return fetch().then().then(data => dispatch(addedTodo(data)))
	    // here we use setTimeout to fake one
	    console.log(2);
	    $.ajax({
	    	url: '/menu.json',
	    	type: 'GET'
	    }).done((data) => {
	    	console.log(data);
	    	dispatch({
	    		type: FETCH_MENU_LIST_END,
	    		list: data.list
	    	});
	    }).fail((e) => {
	    	console.log(e);
	    });
	};
}
