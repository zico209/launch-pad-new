import hre, { ethers } from "hardhat";
import { saveContractAddress } from "../utils"

async function main() {
    const MCK = await hre.ethers.getContractFactory("C2NToken");
    const token = await MCK.deploy();
    await token.waitForDeployment();
    const tokenAddress = await token.getAddress();
    console.log("C2N deployed to: ", tokenAddress);
    saveContractAddress(hre.network.name, "C2N-TOKEN", tokenAddress);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
