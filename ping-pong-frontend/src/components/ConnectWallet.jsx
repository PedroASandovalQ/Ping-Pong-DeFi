import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { ethers } from 'ethers';

export default function ConnectWallet({ onConnect }) {
  const [error, setError] = useState('');

  const handleConnect = async () => {
    console.log('🔗 Connect button clicked');
    if (!window.ethereum) {
      console.log('❌ window.ethereum undefined');
      setError('MetaMask no detectado');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('🔑 Accounts returned:', accounts);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      onConnect(accounts[0], provider);
      setError('');
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <>
      <Button variant="outline-light" onClick={handleConnect}>
        Connect Wallet
      </Button>
      {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
    </>
  );
}
