import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import authAction from "../../store/Actions/authAction"
export default()=>{
   const dispatch= useDispatch()
    const {register,handleSubmit,formState:{errors}}= useForm()
    const onSubmit=(data)=>{
        console.log("submit!!!:" ,data)
        dispatch(authAction.login(data))
        
    }
    return {onSubmit,register,handleSubmit,errors }
}