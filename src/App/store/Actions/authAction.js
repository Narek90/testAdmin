import {USER_AUTH,SUCSESS_AUTH, GET_ME,SET_ME} from "../Types/authTypes"

export const login=(data)=>{
    return {
        type:USER_AUTH,
        payload:data
    }

}

export const sucsessLogin=()=>{
    return {
        type:SUCSESS_AUTH
    }

}

 

export const getMeAction=()=>{
    return {
        type:GET_ME
    }

}
export const setMeAction=(data)=>{
    return {
        type:SET_ME,
        payload:data
    }

}

 