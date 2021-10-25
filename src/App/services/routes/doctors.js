import api from "../index";

export const getDoctorsRequest = async () => {
    try {
        const responce = await api.get("https://api-tm.annaniks.com/users/user/?role=doctor&limit=20&offset=0")
        return responce.data.results
    } catch (error) {
        if (error.response) {
            
            throw error.response.data; 
            
        }
        
        throw error
    }
}
export const updateDoctorRequest = async (id,date)=>{
    try {
        const responce = await api.post(`users/doctor-edit/${id}/`,date)
        return responce.data
    } catch (error) {
        if( error.response){
            throw error.response.data; 
        }
        throw error
    }
    
}