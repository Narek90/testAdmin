import api from "../index";

export const doctorsRequest = async () => {
    try {
        const responce = await api.get("users/get-doctors/?with_slots=False")
        return responce.data
    } catch (error) {
        if (error.response) {
            
            throw error.response.data; // => the response payload 
            
        }
        
        throw error
    }
}