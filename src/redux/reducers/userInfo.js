import { GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAILURE} from "../actions/userInfoAction";

const initialState = {
    user: {},
    isFetching: false,
    isError: false,
};

export function userInfoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return { ...state, isFetching: true }

        case GET_USER_INFO_SUCCESS:
            return { user: action.payload, isFetching: false }
        case GET_USER_INFO_FAILURE:
            return { isFetching: false, isError: true, error: action.payload}
        default:
            return state
    }
}