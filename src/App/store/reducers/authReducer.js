import authTypes from "../Types/authTypes";


export default (state={},action)=>{
    const {type,payload}=action
    switch (type) {
        case authTypes.USER_AUTH:
        return {...state}
    
        default:
           return state
    }

}