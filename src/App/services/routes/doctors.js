import api from "../index";

export const loginRequest = async () => {
    try {
        const responce = await api.post("users/get-doctors/?with_slots=False")
        return responce.data
    } catch (error) {
        if (error.response) {
            
            throw error.response.data; // => the response payload 
            
        }
        
        throw error
    }
}