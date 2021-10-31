import { DELETE_CATEGORI, GET_CATEGORIES, SET_CATEGORIES } from "../Types/categoriesTypes"

export const getCategoriesAction=()=>{
    return {
        type:GET_CATEGORIES
        
    }

}
export const setCategoriesAction=(payload)=>{
    return {
        type:SET_CATEGORIES,
        payload
        
    }

}
export const deleteCategoryAction=(payload)=>{
    return {
        type:DELETE_CATEGORI,
        payload
        
    }

}
