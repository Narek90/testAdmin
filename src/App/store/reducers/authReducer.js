import {SET_ME, SUCSESS_AUTH} from "../Types/authTypes";
const INIT_STATE={
    isAuth:false,
    user:null
}

export default (state=INIT_STATE,action)=>{ 
    const {type,payload}=action
    
    switch (type) {
        case SUCSESS_AUTH:
        return {...state, isAuth:true}
    
        case SET_ME:
            return {...state, user:payload}
    
        default:
           return state
    }

}