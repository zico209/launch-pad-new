// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Airdrop is ReentrancyGuard {
    IERC20 public airdropToken;
    uint256 public totalTokensWithdrawn;

    mapping(address => bool) public wasClaimed;
    uint256 public constant TOKENS_PER_CLAIM = 100 * 10 ** 18;

    event TokensAirdropped(address beneficiary);

    // Constructor, initial setup
    constructor(address _airdropToken) {
        require(_airdropToken != address(0));

        airdropToken = IERC20(_airdropToken);
    }

    // Function to withdraw tokens.
    function withdrawTokens() public nonReentrant {
        address beneficiary = msg.sender;

        require(!wasClaimed[beneficiary], "Already claimed!");
        wasClaimed[msg.sender] = true;

        bool status = airdropToken.transfer(beneficiary, TOKENS_PER_CLAIM);
        require(status, "Token transfer status is false.");

        totalTokensWithdrawn += TOKENS_PER_CLAIM;
        emit TokensAirdropped(beneficiary);
    }
}
