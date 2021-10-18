import { GET_DOCTORS, SET_DOCTORS } from "../Types"

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