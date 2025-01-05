import hre, { ethers } from 'hardhat';
import { saveContractAddress, getSavedContractAddresses } from './utils';

async function main() {
    const RPS = '1';
    const startTS = Math.floor(Date.now() / 1000) + 60;
    // get c2n token address from contract address file
    const c2nTokenAddress = getSavedContractAddresses()[hre.network.name]['C2N-TOKEN'];
    console.log('c2nTokenAddress: ', c2nTokenAddress);

    const farm = await hre.ethers.deployContract('FarmingC2N', [c2nTokenAddress, ethers.parseEther(RPS), startTS]);
    const Farm = await farm.waitForDeployment();
    const farmAddress = await Farm.getAddress();
    console.log('Farm deployed to: ', farmAddress);

    saveContractAddress(hre.network.name, 'FarmingC2N', farmAddress);

    // fund the farm
    // approve the farm to spend the token
    const C2N = await hre.ethers.getContractAt('C2NToken', c2nTokenAddress);
    const approveTx = await C2N.approve(Farm.target, ethers.parseEther('50000'));
    await approveTx.wait();
    let tx = await Farm.fund(ethers.parseEther('50000'));
    await tx.wait();
    // add lp token
    const lpTokenAddress = getSavedContractAddresses()[hre.network.name]['C2N-TOKEN'];
    await Farm.add(100, lpTokenAddress, true);
    console.log('Farm funded and LP token added');
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
