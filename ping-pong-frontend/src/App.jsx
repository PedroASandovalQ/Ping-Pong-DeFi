import { useState } from 'react';
import { ethers } from 'ethers';
import { Container } from 'react-bootstrap';

import AppNavbar from './components/Navbar.jsx';
import ConnectWallet from './components/ConnectWallet.jsx';
import RegisterPlayer from './components/RegisterPlayer.jsx';
import ReportMatch from './components/ReportMatch.jsx';
import DepositWithdraw from './components/DepositWithdraw.jsx';
import PlayerStats from './components/PlayerStats.jsx';

import PingPongAbi from './abi/PingPong.json';

export default function App() {
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [stats, setStats] = useState({
    wins: 0,
    losses: 0,
    rating: 1000,
    balance: '0.0'
  });

  const handleConnect = async (account, prov) => {
    setWallet(account);
    setProvider(prov);

    const signer = prov.getSigner();
    const pingpong = new ethers.Contract(
      import.meta.env.VITE_CONTRACT_ADDRESS,
      PingPongAbi.abi,
      signer
    );
    setContract(pingpong);

    try {
      const p = await pingpong.getPlayer(account);
      setStats({
        wins: p.wins.toNumber(),
        losses: p.losses.toNumber(),
        rating: p.rating.toNumber(),
        balance: ethers.utils.formatUnits(p.balance, 18),
      });
    } catch (err) {
      console.error('Error loading player stats:', err);
    }
  };

  const handleRegister = async () => {
    try {
      const tx = await contract.registerPlayer();
      await tx.wait();
      const p = await contract.getPlayer(wallet);
      setStats({
        wins: p.wins.toNumber(),
        losses: p.losses.toNumber(),
        rating: p.rating.toNumber(),
        balance: ethers.utils.formatUnits(p.balance, 18),
      });
      alert('Player registered successfully!');
    } catch (e) {
      alert('Registration error: Already registered.\nError details: \n' + e.message);
    }
  };

  const handleReport = async (opponent, iWon) => {
    try {
      const tx = await contract.reportMatch(opponent, iWon);
      await tx.wait();
      const p = await contract.getPlayer(wallet);
      setStats({
        wins: p.wins.toNumber(),
        losses: p.losses.toNumber(),
        rating: p.rating.toNumber(),
        balance: ethers.utils.formatUnits(p.balance, 18),
      });
      alert('Match reported!');
    } catch (e) {
      alert('Report error: ' + e.message);
    }
  };

  const handleDeposit = async (amount) => {
    try {
      const parsed = ethers.utils.parseUnits(amount, 18);
      const DAI_ADDRESS = "0x3e622317f8C93f7328350cF0B56d9eD4C620C5d6";
      const erc20Abi   = [ "function approve(address, uint256) external returns(bool)" ];
      const daiContract = new ethers.Contract(DAI_ADDRESS, erc20Abi, provider.getSigner());

      const txApprove = await daiContract.approve(
        import.meta.env.VITE_CONTRACT_ADDRESS,
        parsed
      );
      await txApprove.wait();

      const tx = await contract.deposit(parsed);
      await tx.wait();
      const p = await contract.getPlayer(wallet);
      setStats(s => ({
        ...s,
        balance: ethers.utils.formatUnits(p.balance, 18)
      }));
      alert('Deposit successful!');
    } catch (e) {
      alert('Deposit error: ' + e.message);
    }
  };

  const handleWithdraw = async (amount) => {
    try {
      const parsed = ethers.utils.parseUnits(amount, 18);
      const tx = await contract.withdraw(parsed);
      await tx.wait();
      const p = await contract.getPlayer(wallet);
      setStats(s => ({
        ...s,
        balance: ethers.utils.formatUnits(p.balance, 18)
      }));
      alert('Withdrawal successful!');
    } catch (e) {
      alert('Withdrawal error: ' + e.message);
    }
  };

  return (
    <>
      <AppNavbar>
        <ConnectWallet onConnect={handleConnect} />
      </AppNavbar>

      <Container style={{ maxWidth: 600, marginTop: '1rem' }}>
        {!wallet && (
          <p className="text-center">Please connect your wallet to continue.</p>
        )}

        {wallet && contract && (
          <>
            <PlayerStats stats={{ address: wallet, ...stats }} />
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
