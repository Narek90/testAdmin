
import {takeLatest,call} from "redux-saga/effects"
import api from "../../services";
import { loginRequest } from "../../services/routes/auth";
import authTypes from "../Types/authTypes"
function* login({payload}){
    const {userName,password}= payload
    console.log(userName, password);
    try{
    const data=yield call(loginRequest,userName,password)
        if (data.access) {
            console.log(data);
            localStorage.setItem("access",data.access)
            api.defaults.headers.common['Authorization'] = "Bearer "+data.access;//??
            window.location = "/adminpage" // ??
        }
    }catch(error){
       console.log(error.masage)

    }
}
export default function* watchAuth (){
    console.log ("SAGA!!!Watch")
   yield takeLatest(authTypes.USER_AUTH,login)
}