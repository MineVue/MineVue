export const TEST_ACTION = 'TEST_ACTION';
export const FETCH_MENU_LIST_END = 'FETCH_MENU_LIST_END';
export const FETCH_USER_LIST_END = 'FETCH_USER_LIST_END'
export function fetchMenuList() {
    return (dispatch, getState) => {
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
    };
}
export function fetchUserList() {
    return (dispatch, getState) => {
        $.ajax({
            url: '/dummy.json',
            type: 'GET'
        }).done((data) => {
            dispatch({
                type: FETCH_USER_LIST_END,
                people: data.people
            });
        }).fail((e) => {
            console.log(e);
        });
    };
}