import { Container } from 'react-bootstrap';
import AppNavbar from './components/Navbar.jsx';
import RegisterPlayer from './components/RegisterPlayer.jsx';
import ReportMatch from './components/ReportMatch.jsx';
import DepositWithdraw from './components/DepositWithdraw.jsx';
import PlayerStats from './components/PlayerStats.jsx';
import { useState } from 'react';

export default function App() {
  const [wallet, setWallet] = useState(null);
  const [stats, setStats] = useState({
    address: '0x…', wins: 0, losses: 0, rating: 1000, balance: 0
  });

  // Placeholder handlers: más adelante los conectarás con ethers.js
  const handleConnect = () => setWallet('0xAbc…123');
  const handleRegister = () => alert('RegisterPlayer clicked');
  const handleReport = (op, won) =>
    alert(`ReportMatch: opponent ${op}, iWon? ${won}`);
  const handleDeposit = amt => alert(`Deposit ${amt} DAI`);
  const handleWithdraw = amt => alert(`Withdraw ${amt} DAI`);

  return (
    <>
      <AppNavbar onConnect={handleConnect} />
      <Container style={{ maxWidth: 600 }}>
        {wallet && <PlayerStats stats={{ ...stats, address: wallet }} />}
        {!wallet ? (
          <p className="text-center">Please connect your wallet</p>
        ) : (
          <>
            <RegisterPlayer onRegister={handleRegister} />
            <ReportMatch onReport={handleReport} />
            <DepositWithdraw
              onDeposit={handleDeposit}
              onWithdraw={handleWithdraw}
            />
          </>
        )}
      </Container>
    </>
  );
}
