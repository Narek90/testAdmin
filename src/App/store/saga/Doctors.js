import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getDoctorsRequest } from "../../services/routes/doctors";
import { setDoctorsAction } from "../Actions/doctorActions";
import { GET_DOCTORS } from "../Types";

function* getDoctors(){
    console.log("start get Doctors list" );
const data = yield call(getDoctorsRequest)
console.log(data);
 yield put(setDoctorsAction(data))
}



export default function* doctorsWatch(){
    console.log("Doctors Saga Watch!");
    yield takeLatest(GET_DOCTORS,getDoctors)

}