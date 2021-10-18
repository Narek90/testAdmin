import { combineReducers } from "redux";
import authReducer from "./authReducer";
import doctorsReducers from "./doctorsReducers";

const reducer= combineReducers({authReducer, doctorsReducers})
export default reducer