import React from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";

function CustomerHistoryService() {
  const data = [1, 2, 3, 4, 5];
  return (
    <Container className="py-5">
      <Button variant="danger">Cencel Request</Button>
      <h1>OFFER REQUEST LIST</h1>

      <hr />

      {data.map((data) => (
        <Card>
          <Card.Header>Service Title</Card.Header>
          <Card.Body>
            <Card.Title>Type of Issue</Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <Card.Text>Information</Card.Text>

            <Row>
              <Col xs={10}>
                <Button variant="primary">Learn more</Button>
              </Col>
              <Col xs={1}>
                <Button variant="primary">Decline</Button>
              </Col>
              <Col xs={1}>
                <Button variant="primary">Accept</Button>
              </Col>
            </Row>
          </Card.Body>
          <Card.Footer>Location</Card.Footer>
          <Card.Footer>Time</Card.Footer>
        </Card>
      ))}

      <hr />
    </Container>
  );
}

export default CustomerHistoryService;
