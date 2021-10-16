
const INIT_STATE={
  
}

export default (state=INIT_STATE,action)=>{ 
    const {type,payload}=action
    switch (type) {
        case "":
        return {...state}
    
        default:
           return state
    }

}