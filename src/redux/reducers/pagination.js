import { SET_NEXT_PAGE } from "../actions/changePage";

const initialState = {
    currentPage: 1,
    perPage: 10,
    pageCount: 20,
};

export function paginationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NEXT_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}