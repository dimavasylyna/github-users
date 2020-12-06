import FetchUsers from "../../utils/FetchUsers";

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';


export function getUsers(perPage, since) {
    const fetchUsers = new FetchUsers();
    return dispatch => {
        dispatch({
            type: GET_USERS_REQUEST,
        })
        fetchUsers.getUserList(perPage, since)
            .then(data=>{
                return dispatch({
                    type: GET_USERS_SUCCESS,
                    payload: data
                })
            })
            .catch(err=>{
                return dispatch({
                    type: GET_USERS_FAILURE,
                    payload: err,
                })
            });
    }
}