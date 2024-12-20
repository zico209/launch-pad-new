import hre, { ethers } from "hardhat";
import { saveContractAddress } from "./utils"

async function main() {
    const MCK = await hre.ethers.getContractFactory("C2NToken");
    const token = await MCK.deploy();
    await token.waitForDeployment();
    const tokenAddress = await token.getAddress();
    console.log("C2N deployed to: ", tokenAddress);
    saveContractAddress(hre.network.name, "C2N-TOKEN", tokenAddress);

    const [deployer] = await ethers.getSigners(); // 获取部署者地址
    console.log("Deployer address: ", deployer.address);

    const mintAmount = ethers.parseEther("100000"); // 将 100,000 转换为带 18 位小数的单位
    const mintTx = await token.mint(deployer.address, mintAmount); // 调用 mint 函数
    await mintTx.wait(); // 等待交易完成
    console.log(`Minted ${mintAmount.toString()} tokens to deployer: ${deployer.address}`);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
