# PingPong DeFi

A decentralized ping pong ranking platform using the ELO system and Compound Finance.

---

##  What is PingPong DeFi?

PingPong DeFi is a web3 platform where ping pong players can:

- Register their matches on-chain.
- Earn ELO points based on match results.
- Join tournaments by paying entry fees in crypto.
- Have entry fees deposited in Compound to earn interest.
- Automatically distribute the interest earned to the winners.

It combines competitive gameplay with decentralized finance, rewarding skill and participation.

---

## Tech Stack

- **Frontend:** React.js
- **Smart Contracts:** Solidity, Hardhat
- **Blockchain:** Ethereum (Goerli testnet)
- **DeFi Protocol:** Compound Finance (cTokens)
- **SDK:** Compound.js (in progress)

---

## Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/PedroASandovalQ/Ping-Pong-DeFi.git
   cd Ping-Pong-DeFi

## Configure Backend (Hardhat + Solidity)

1. Create .env from .env.example file:

   ```bash
   cp .env.example .env

2. Edit your .env to add your PRIVATE_KEY and ALCHEMY_API.

3. Install Node dependencies:
   ```bash
   npm install

4. Compile contracts:
   ```bash
   npx hardhat compile

5. Deploy in Sepolia:
   ```bash
   npx hardhat run scripts/deploy.js --network sepolia

## Configure Frontend (React + React-Bootstrap)

1. Go to the frontend directory:
   ```bash
   cd ping-pong-frontend

2. Install Node dependencies:
   ```bash
   npm install

3. Create .env from .env.example file:

   ```bash
   cp .env.example .env

4. Edit your .env to add your VITE_CONTRACT_ADDRESS.

5. Run dev server:
   ```bash
   npm run dev

6. Open http://localhost:5173 in your browser.

## Usage

1. Connect your wallet.

2. Register player to get initial ranking.

3. Report matches using wallet address of opponent.

4. Deposit/Withraw DAI.
