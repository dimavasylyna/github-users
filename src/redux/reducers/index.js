import { combineReducers } from "redux";
import {userListReducer} from "./userList";
import {userInfoReducer} from "./userInfo";
import {paginationReducer} from "./pagination";

export let rootReducer = combineReducers({
    users: userListReducer,
    userInfo: userInfoReducer,
    pagination: paginationReducer,
});