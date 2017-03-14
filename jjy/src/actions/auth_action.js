import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_END = 'LOGIN_END';

export const login = (mdn, deviceId) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_START
        });
        return axios({
            method: 'post',
            url: '/ext/mobile-login',
            data: 'mdn=' + mdn + '&deviceId=' + deviceId,
            withCredentials: true
        }).then((res) => {
            console.log(res);
            dispatch({
                type: LOGIN_END
            });
        });
    };
};
