import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useRouteMatch } from "react-router"
import {  userSelector } from "../../store/Selectors/authSelectors"
import { doctorsSelector } from "../../store/Selectors/doctorsSelectors"
import { getDoctorsAction } from "../../store/Actions/doctorActions"


export default ()=>{   
    const user=useSelector(userSelector)  
    const doctors=useSelector(doctorsSelector) 
    const dispatch= useDispatch() 
    const match = useRouteMatch()
    const [loading, setLoading]=useState(true)
    const history= useHistory()

    useEffect(()=>{
        dispatch(getDoctorsAction())
        setTimeout(()=>{
           setLoading(false)
        },1000)
    },[])
    
    const logout=()=>{
        localStorage.clear()
        window.location="/login"
    }


    return {logout, match,loading,user,doctors,history,dispatch}
}