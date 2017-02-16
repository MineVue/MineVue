export const TEST_ACTION = 'TEST_ACTION';
export const FETCH_MENU_LIST_END = 'FETCH_MENU_LIST_END';
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
