import { Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function DepositWithdraw({ onDeposit, onWithdraw }) {
  const [amount, setAmount] = useState('');
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Deposit / Withdraw DAI</Card.Title>
        <Form.Group className="mb-2">
          <Form.Control
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </Form.Group>
        <Button
          variant="purple"
          onClick={() => onDeposit(amount)}
          className="me-2"
        >
          Deposit
        </Button>
        <Button variant="warning" onClick={() => onWithdraw(amount)}>
          Withdraw
        </Button>
      </Card.Body>
    </Card>
  );
}
