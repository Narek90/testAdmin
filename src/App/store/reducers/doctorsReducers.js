import { SET_DOCTORS } from "../Types"
import { SET_SELECTED_DOCTOR } from "../Types/doctorTypes"

const INIT_STATE={
  doctors:[],
  doctor:null
}

export default (state=INIT_STATE,action)=>{ 
    const {type,payload}=action
    switch (type) {
        case SET_DOCTORS:
        return {...state,doctors:payload?payload:[]}
    
        case SET_SELECTED_DOCTOR:
          const selectedDoctor=state.doctors?.find((item)=>{
            return item.id === parseInt(payload)
          })
        return {...state,doctor:selectedDoctor?selectedDoctor:null}
    
        default:
           return state
    }

}