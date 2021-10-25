import { GET_DOCTORS, SET_DOCTORS,CHANGE_DOCTOR, GET_SELECTED_DOCTOR,SET_SELECTED_DOCTOR, UPDATE_DOCTOR_INFO  } from "../Types"


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
export const ChangeDoctorInfoAction=(payload)=>{
    return{
        type:CHANGE_DOCTOR,
        payload
    }
}
export const updateDoctorInfoAction=()=>{
    return{
        type:UPDATE_DOCTOR_INFO,
    }
}