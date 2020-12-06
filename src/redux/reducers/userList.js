import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from "../actions/userListAction";

const initialState = {
    userList: [],
    isFetching: false,
    isError: false,
};

export function userListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return { ...state, isFetching: true }

        case GET_USERS_SUCCESS:
            return { ...state, userList: action.payload, isFetching: false }
        case GET_USERS_FAILURE:
            return { ...state, isFetching: false, isError: true, error: action.payload}
        default:
            return state
    }
}