import { Col, Container, Row, Spinner } from "react-bootstrap"
import hook from "../hook"

export default ()=>{
    const {loading,user}= hook()
    console.log(user);
    return <div className= "myProfile">
        {loading? <Spinner animation="border" variant="dark" />:
        <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={8} md={4}>
      xs=12 md=8
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>xs=6</Col>
    <Col xs={6}>xs=6</Col>
  </Row>
</Container>}
    </div>
}