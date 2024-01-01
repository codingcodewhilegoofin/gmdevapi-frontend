import { Container, Row, Col } from "react-bootstrap";

const date = new Date();

export const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{
        marginTop: '2.5%'
      }}>
        <Row className="align-items-center p-5">

          <Col size={12} sm={6}>
            <h1 className="text-black">More coming soon! </h1>
          </Col>


          <Col size={12} sm={6} className="text-left text-sm-end text-blue-500">
            <p className="text-black text-center p-2" style={{border: '1px solid black'}}>Copyright {date.getFullYear()}. All Rights Reserved.<br/> I am not affiliated with any 3rd party's mentioned. <br/>I am using their public API's in a responsible manner.<br/> All keys are secured.<br/> Please do not abuse the API or I will shut it down.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}
