#  Ping-Pong DeFi

**Ping-Pong DeFi** is a decentralized platform for managing ping pong rankings using smart contracts and the ELO rating system. It also integrates decentralized finance (DeFi) through the Compound protocol, allowing DAI entry fees to earn interest via cDAI, which is automatically distributed to winners.

---

##  Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Requirements](#-requirements)
- [Environment Variables](#-environment-variables)
- [Installation and Deployment](#-installation-and-deployment)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Contributing](#-contributing)
- [License](#-license)

---

##  Features

- On-chain player registration.
- ELO-based ranking system.
- Match result recording directly on the blockchain.
- DAI deposits converted into cDAI using Compound.
- On-chain balances and withdrawal system.
- React interface to interact with the smart contract.

---

## ⚙ Technologies Used

- **Solidity**: smart contracts
- **Hardhat**: Ethereum development framework
- **Ethers.js**: interaction with smart contracts
- **Compound Finance**: DeFi interest system
- **React + Vite**: modern frontend framework
- **dotenv**: environment variable management
- **Sepolia Testnet**: Ethereum test network

---

##  Project Structure

```
Ping-Pong-DeFi/
│
├── contracts/
│   └── PingPong.sol            # Main smart contract
├── scripts/
│   └── deploy.js               # Deployment script using Hardhat
├── ping-pong-frontend/         # React-based user interface
├── hardhat.config.js           # Solidity and network configuration
├── .env.example                # Required environment variables
├── package.json                # Backend dependencies and scripts
└── README.md                   # This file
```

---

##  Requirements

- Node.js ≥ 16
- [Alchemy](https://alchemy.com/) account with Sepolia API Key
- Metamask wallet with Sepolia ETH
- Git

---

##  Environment Variables

Create a `.env` file in the root folder with the following content:

```env
PRIVATE_KEY=your_private_key_without_0x
ALCHEMY_API=https://eth-sepolia.g.alchemy.com/v2/your_api_key
```

You can use `.env.example` as a reference.

---

##  Installation and Deployment

### Backend

1. Clone the repository:

```bash
git clone https://github.com/PedroASandovalQ/Ping-Pong-DeFi.git
cd Ping-Pong-DeFi
```

2. Install dependencies:

```bash
npm install
```

3. Compile the contract:

```bash
npx hardhat compile
```

4. Deploy to Sepolia:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Copy the contract address displayed in the console for use in the frontend.

---

### Frontend

1. Enter the frontend directory:

```bash
cd ping-pong-frontend
```

2. Install frontend dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
VITE_CONTRACT_ADDRESS=0x...       # Deployed contract address
VITE_ALCHEMY_API=https://eth-sepolia.g.alchemy.com/v2/your_api_key
```

4. Run the app locally:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

##  Contributing

Contributions are welcome! Feel free to open an **issue**, suggest improvements, or submit a **pull request** with new features.



