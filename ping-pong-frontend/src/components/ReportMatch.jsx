import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function ReportMatch({ onReport }) {
  const [opponent, setOpponent] = useState('');
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Report Match</Card.Title>
        <Form.Group className="mb-2">
          <Form.Control
            placeholder="Opponent Address"
            value={opponent}
            onChange={e => setOpponent(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => onReport(opponent, true)}
          className="me-2"
        >
          I Won
        </Button>
        <Button variant="danger" onClick={() => onReport(opponent, false)}>
          I Lost
        </Button>
      </Card.Body>
    </Card>
  );
}
