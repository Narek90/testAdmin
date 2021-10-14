import  Button  from "react-bootstrap/Button"
import { Link } from "react-router-dom"
export default ()=>{
return <div className="homePage">
    <Link to="/login">
    <Button variant="secondary">Login</Button>
    </Link>
    </div>
}