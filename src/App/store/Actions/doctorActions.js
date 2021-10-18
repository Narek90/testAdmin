import { GET_DOCTORS, SET_DOCTORS } from "../Types"
import { GET_SELECTED_DOCTOR, GET_SELECTED_DOCTORS, SET_SELECTED_DOCTOR } from "../Types/doctorTypes"

export const getDoctorsAction=()=>{
    return{
        type:GET_DOCTORS
    }
}
export const setDoctorsAction=(data)=>{
    return{
        type:SET_DOCTORS,
        payload:data
    }
}

export const getSelectedDoctorAction=(id)=>{
    return{
        type:GET_SELECTED_DOCTOR,
        payload:id
    }
}
export const setSelectedDoctorAction=(id)=>{
    return{
        type:SET_SELECTED_DOCTOR,
        payload:id
    }
}