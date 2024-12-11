import hre, { ethers } from "hardhat";
import { getSavedContractAddresses, saveContractAddress } from "../utils"
async function main() {
    // get c2n token address from contract address file
    const c2nTokenAddress = getSavedContractAddresses()[hre.network.name]["C2N-TOKEN"];
    console.log("c2nTokenAddress: ", c2nTokenAddress)

    const air = await hre.ethers.getContractFactory("Airdrop");
    const Air = await air.deploy(c2nTokenAddress);
    await Air.waitForDeployment();
    const airAddress = await Air.getAddress();
    console.log("Air deployed to: ", airAddress);
    saveContractAddress(hre.network.name, "Airdrop-C2N", airAddress);
    // send c2n token to airdrop contract
    const c2nToken = await hre.ethers.getContractAt("C2NToken", c2nTokenAddress);
    let tx = await c2nToken.transfer(airAddress, ethers.parseEther("10000"));
    // wait for transfer
    await tx.wait();
    // get airdrop balance of c2n token
    const balance = await c2nToken.balanceOf(airAddress);
    console.log("Airdrop balance of C2N token: ", ethers.formatEther(balance));
    // test airdrop
    tx = await Air.withdrawTokens();
    await tx.wait();
    // get airdrop balance of c2n token
    const balanceAfter = await c2nToken.balanceOf(airAddress);
    console.log("Airdrop balance of C2N token after withdrawTokens: ", ethers.formatEther(balanceAfter));

}



main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
