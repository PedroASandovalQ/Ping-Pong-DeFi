// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Minimal ERC-20 interface
interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
}

// Minimal Compound interface (cToken)
interface ICompound {
    function mint(uint256 mintAmount) external returns (uint);
    function redeemUnderlying(uint256 redeemAmount) external returns (uint);
}

contract PingPong {
    struct Player {
        uint wins;
        uint losses;
        uint rating;
        bool registered;
        uint balance;
    }

    mapping(address => Player) public players;

    IERC20 public dai;
    ICompound public cDai;

    constructor(address _dai, address _cDai) {
        dai = IERC20(_dai);
        cDai = ICompound(_cDai);
    }

    // Register a new player
    function registerPlayer() public {
        require(!players[msg.sender].registered, "Already registered");
        players[msg.sender] = Player(0, 0, 1000, true, 0);
    }

    // Report the result of a match between msg.sender and opponent
    function reportMatch(address opponent, bool iWon) public {
        require(players[msg.sender].registered, "You are not registered");
        require(players[opponent].registered, "Opponent is not registered");
        require(msg.sender != opponent, "You can't play against yourself");

        Player storage me = players[msg.sender];
        Player storage them = players[opponent];

        if (iWon) {
            me.wins++;
            them.losses++;
            me.rating += 10;
            them.rating -= 5;
        } else {
            me.losses++;
            them.wins++;
            me.rating -= 5;
            them.rating += 10;
        }
    }

    // Deposit DAI and supply to Compound
    function deposit(uint amount) public {
        require(players[msg.sender].registered, "Not registered");
        require(dai.transferFrom(msg.sender, address(this), amount), "DAI transfer failed");
        require(dai.approve(address(cDai), amount), "DAI approve failed");
        require(cDai.mint(amount) == 0, "Compound mint failed");

        players[msg.sender].balance += amount;
    }

    // Withdraw DAI from Compound
    function withdraw(uint amount) public {
        require(players[msg.sender].registered, "Not registered");
        require(players[msg.sender].balance >= amount, "Insufficient balance");

        require(cDai.redeemUnderlying(amount) == 0, "Compound redeem failed");
        require(dai.transfer(msg.sender, amount), "DAI transfer back failed");

        players[msg.sender].balance -= amount;
    }

    // Return player data
    function getPlayer(address player) public view returns (Player memory) {
        return players[player];
    }
}
