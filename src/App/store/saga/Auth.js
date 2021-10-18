
import {takeLatest,call,put} from "redux-saga/effects"
import api from "../../services";
import { getMeRequest, loginRequest } from "../../services/routes/auth";
import {USER_AUTH, GET_ME} from "../Types/authTypes"
import { getMeAction, setMeAction, sucsessLogin } from "../Actions/authAction";
function* login({payload}){
    const {userName,password}= payload
    try{
    const data=yield call(loginRequest,userName,password)
        if (data.access) {
            localStorage.setItem("access",data.access)
            api.defaults.headers.common['Authorization'] = "Bearer "+data.access;
            yield put(sucsessLogin())
            yield put(getMeAction())
        }
    }catch(error){
       console.log(error.masage)
    }
}
function* getMe(){
    try{
    const data=yield call(getMeRequest)
      yield put(setMeAction(data))  
    }catch(error){
       console.log(error.masage)

    }
}
export default function* watchAuth (){

   yield takeLatest(USER_AUTH,login)
   yield takeLatest(GET_ME,getMe)
}