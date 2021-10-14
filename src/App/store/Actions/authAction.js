import authTypes from "../Types/authTypes"

const login=(data)=>{
    return {
        type:authTypes.USER_AUTH,
        payload:data
    }

}

export default{login}