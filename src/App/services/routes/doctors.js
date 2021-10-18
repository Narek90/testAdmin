import api from "../index";

export const getDoctorsRequest = async () => {
    try {
        const responce = await api.get("users/get-doctors/?with_slots=False")
        return responce.data.results
    } catch (error) {
        if (error.response) {
            
            throw error.response.data; 
            
        }
        
        throw error
    }
}