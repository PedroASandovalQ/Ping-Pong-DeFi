import { Card, Table } from 'react-bootstrap';

export default function PlayerStats({ stats }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Your Stats</Card.Title>
        <Table borderless>
          <tbody>
            <tr>
              <th>Address</th>
              <td>{stats.address}</td>
            </tr>
            <tr>
              <th>Wins</th>
              <td>{stats.wins}</td>
            </tr>
            <tr>
              <th>Losses</th>
              <td>{stats.losses}</td>
            </tr>
            <tr>
              <th>Rating</th>
              <td>{stats.rating}</td>
            </tr>
            <tr>
              <th>Balance</th>
              <td>{stats.balance} DAI</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
