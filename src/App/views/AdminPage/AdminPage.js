import { useEffect } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { userSelector } from "../../store/Selectors/authSelectors"
import hook from "./hook"

export default ()=>{
    const {logout}=hook()
    const user =useSelector(userSelector)
    useEffect(()=>{ 
        const access= localStorage.getItem('access')
          if (!access) {
        window.location="/login"
       }
       },[])
       
    return <div className="adminPage">
        <h1>welcome to admin page!! {user?user.first_name:""}</h1>
        <Button variant="secondary" onClick={logout}>Log out </Button>
    </div>
}