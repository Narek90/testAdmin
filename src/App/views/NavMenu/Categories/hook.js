import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategoryAction, getCategoriesAction } from "../../../store/Actions/categoriesActions";
import { categoriesSelector } from "../../../store/Selectors/categoriesSelectors";

    export default ()=>{
    const dispatch=useDispatch()
    const categories=useSelector(categoriesSelector)
    const deleteCategory=(id)=>{
        dispatch(deleteCategoryAction(id))

    }
    useEffect(()=>{
        dispatch(getCategoriesAction())
    },[])
    return {deleteCategory,categories}
}