import FetchUsers from "../../utils/FetchUsers";

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';


export function getUserInfo(userName) {
    const fetchUsers = new FetchUsers();
    return dispatch => {
        dispatch({
            type: GET_USER_INFO_REQUEST,
        })
        fetchUsers.getUserInfo(userName)
            .then(data=>{
                return dispatch({
                    type: GET_USER_INFO_SUCCESS,
                    payload: data
                })
            })
            .catch(err=>{
                return dispatch({
                    type: GET_USER_INFO_FAILURE,
                    payload: err,
                })
            });
    }
}