import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function AppNavbar({ onConnect }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand>🏓 Ping-Pong DeFi</Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" onClick={onConnect}>
            Connect Wallet
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
