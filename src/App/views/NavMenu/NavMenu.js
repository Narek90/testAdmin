import { Nav } from "react-bootstrap"
import hook from "./hook"
export default ()=>{
    const {logout, match}= hook()
    return (
    <div className="navMenu">
    <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href={`/`}>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href={`${match.url}/profile`}>My profile</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link href={`${match.url}/doctors/list`}>Doctors list</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href={`/`} onClick={logout}>Logout</Nav.Link>
    </Nav.Item>
   
  </Nav>
  </div>
  )
}