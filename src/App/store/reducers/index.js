import { combineReducers } from "redux";
import authReducer from "./authReducer";
import doctorsReducers from "./doctorsReducers";
import categoriesReducer from "./categoriesReducer";

const reducer= combineReducers({authReducer, doctorsReducers,categoriesReducer})
export default reducer