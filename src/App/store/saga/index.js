import { all } from "@redux-saga/core/effects"
import Auth from "./Auth"
import Doctors from "./Doctors"
import Categories from "./Categories"


export default function* allSagas (){
    yield all([Auth(),Doctors(),Categories()])
} 
