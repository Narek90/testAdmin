import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { getMeAction, login } from "../../store/Actions/authAction"
import { isAuthSelector, userSelector } from "../../store/Selectors/authSelectors"


export default()=>{
   const dispatch= useDispatch()
   const isAuth=useSelector(isAuthSelector)
   const me=useSelector(userSelector)
   const history=useHistory()
    const {register,handleSubmit,formState:{errors}}= useForm()
    const onSubmit=(data)=>{
        dispatch(login(data))
      
    }
    useEffect(()=>{
        if (isAuth) {
            history.push('/adminpage')    
        }
    },[isAuth])
    return {onSubmit,register,handleSubmit,errors ,me}
}