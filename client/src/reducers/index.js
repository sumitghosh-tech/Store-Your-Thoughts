import { combineReducers } from "redux";
import posts from "../reducers/posts.js"; //importing postReducer
import auth from "../reducers/Auth.js";   //importing authReducer
// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line no-undef
export default combineReducers ({
    posts:posts,
    auth:auth
})