import { SET_DOCTORS } from "../Types"

const INIT_STATE={
  doctors:null
}

export default (state=INIT_STATE,action)=>{ 
    const {type,payload}=action
    switch (type) {
        case SET_DOCTORS:
        return {...state,doctors:payload}
    
        default:
           return state
    }

}