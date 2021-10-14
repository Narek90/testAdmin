import { useEffect } from "react"
import { Button } from "react-bootstrap"
import hook from "./hook"

export default ()=>{
    const {logout}=hook()
    useEffect(()=>{ 
        const access= localStorage.getItem('access')
          if (!access) {
        window.location="/login"
       }
       },[])
    return <div className="adminPage">
        <h1>welcome to admin page!!</h1>
        <Button variant="secondary" onClick={logout}>Log out </Button>
    </div>
}