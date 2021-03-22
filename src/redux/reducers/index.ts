import { combineReducers } from "redux";
import register from "./register";
import users from "./users";
import login from "./login";
import deleteUser from "./delete";
export default combineReducers({ login, register, users, delete: deleteUser });
