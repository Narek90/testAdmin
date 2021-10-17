import { all } from "@redux-saga/core/effects"
import Auth from "./Auth"
import Doctors from "./Doctors"


export default function* allSagas (){
    yield all([Auth(),Doctors()])
} 
