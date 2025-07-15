import { Navbar, Container, Nav } from 'react-bootstrap';

export default function AppNavbar({ children }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand>🏓 Ping-Pong DeFi</Navbar.Brand>
        <Nav className="ms-auto">
          {children}
        </Nav>
      </Container>
    </Navbar>
  );
}
