export const SET_NEXT_PAGE = 'SET_NEXT_PAGE';


export function changePage(nextPage) {
    return {
        type: SET_NEXT_PAGE,
        payload: nextPage
    }
}