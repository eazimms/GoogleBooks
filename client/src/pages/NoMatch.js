import React from "react"; 
import { Col, Row, Container} from "../components/Grid"; 
// No match to display when a page doesn't exist. 

function NoMatch() {
  return(
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1>404 Page not found</h1>
          <h1>
            <span><p>: You should try to find a real page.</p></span>
          </h1>
        </Col>
      </Row>
    </Container>
  ); 
}

export default NoMatch; 