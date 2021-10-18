import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getDoctorsRequest } from "../../services/routes/doctors";
import { setDoctorsAction, setSelectedDoctorAction } from "../Actions/doctorActions";
import { GET_DOCTORS } from "../Types";
import { GET_SELECTED_DOCTOR } from "../Types/doctorTypes";

function* getDoctors(){
    
const data = yield call(getDoctorsRequest)

 yield put(setDoctorsAction(data))
}
function* getSelectedDoctor({payload}){

 yield put(setSelectedDoctorAction(payload))
}



export default function* doctorsWatch(){
 
    yield takeLatest(GET_DOCTORS,getDoctors)
    yield takeLatest(GET_SELECTED_DOCTOR,getSelectedDoctor)

}