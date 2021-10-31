import { SET_CATEGORIES } from "../Types/categoriesTypes";

const INIT_STATE= {
    categories:[],
}
export default (state=INIT_STATE,action)=>{
    const {type,payload}=action
switch (type) {
    case SET_CATEGORIES:
        return {...state,categories:payload?payload:[]}
       

    default:
        return state
}
}