import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';

export default function App() {
  return (
    <Container className="py-5">
      <h1 className="mb-4 text-center">🏓 Ping-Pong DeFi</h1>
      <Row className="mb-3">
        <Col className="text-center">
          <Button variant="primary">Connect Wallet</Button>
        </Col>
      </Row>

      <Row className="gy-4">
        <Col md={6}>
          <h2>Register Player</h2>
          <Button variant="success">Register Now</Button>
        </Col>
        <Col md={6}>
          <h2>Report Match</h2>
          <Form>
            <Form.Control placeholder="Opponent address" className="mb-2" />
            <Button variant="warning">I Won</Button>{' '}
            <Button variant="danger">I Lost</Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Leaderboard</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Player</th><th>Wins</th><th>Losses</th><th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0xAbc…123</td><td>3</td><td>1</td><td>1020</td>
              </tr>
              <tr>
                <td>0xDef…456</td><td>2</td><td>2</td><td>1000</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
