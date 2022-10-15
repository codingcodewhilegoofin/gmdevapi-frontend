import { Container, Row, Col } from "react-bootstrap";



const date = new Date();

export const Footer = () => {
  return (
    <footer className="footer">
      <Container style={{
        marginTop: '2.5%'
      }}>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <h1>More coming soon ! </h1>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright {date.getFullYear()}. All Rights Reserved. I am not affiliated with any 3rd party's mentioned. <br/>I am using their public API's in a responsible manner. All keys are secured.<br/> Please do not abuse the API or I will shut it down.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}
