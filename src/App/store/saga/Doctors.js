import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { getDoctorsRequest, updateDoctorRequest } from "../../services/routes/doctors";
import { getDoctorsAction, setDoctorsAction, setSelectedDoctorAction } from "../Actions/doctorActions";
import { selectedDoctorSelector } from "../Selectors/doctorsSelectors";
import { GET_DOCTORS } from "../Types";
import { GET_SELECTED_DOCTOR, UPDATE_DOCTOR_INFO } from "../Types/doctorTypes";

function* getDoctors(){
    
const data = yield call(getDoctorsRequest)

 yield put(setDoctorsAction(data))
}

function* getSelectedDoctor({payload}){

 yield put(setSelectedDoctorAction(payload))
}

function* updateDoctorInfo(){
    try{
const doctor = yield select(selectedDoctorSelector)
const {country_code,id,user_categories,slots,...data} = doctor;
const categories = user_categories.map((item)=>{
    return {
      id:item.category.id
    }
  })
  yield call(updateDoctorRequest,id,{...data,categories, interval_changed:true})
  yield put(getDoctorsAction())
}catch(error){
    console.log(error);
  }
}



export default function* doctorsWatch(){
 
    yield takeLatest(GET_DOCTORS,getDoctors)
    yield takeLatest(GET_SELECTED_DOCTOR,getSelectedDoctor)
    yield takeLatest(UPDATE_DOCTOR_INFO,updateDoctorInfo)

}