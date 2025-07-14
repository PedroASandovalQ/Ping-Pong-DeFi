import { Card, Button } from 'react-bootstrap';

export default function RegisterPlayer({ onRegister }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Register as Player</Card.Title>
        <Button variant="success" onClick={onRegister}>
          Register
        </Button>
      </Card.Body>
    </Card>
  );
}
