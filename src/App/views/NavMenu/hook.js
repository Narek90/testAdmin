import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useRouteMatch } from "react-router"
import {  userSelector } from "../../store/Selectors/authSelectors"

export default ()=>{   
    const user=useSelector(userSelector)  
    const match = useRouteMatch()
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
           setLoading(false)
        },1000)
    },[])
    
    const logout=()=>{
        localStorage.clear()
        window.location="/login"
    }

    return {logout, match,loading,user}
}