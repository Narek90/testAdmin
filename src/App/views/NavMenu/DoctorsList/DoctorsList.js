import { Spinner } from "react-bootstrap"
import hook from "../hook"

export default ()=>{
    const {loading}= hook()
  
    return <div>
        {loading? <Spinner animation="border" variant="dark" />:<h1>This is Doctors List!!!</h1>}
    </div>
}