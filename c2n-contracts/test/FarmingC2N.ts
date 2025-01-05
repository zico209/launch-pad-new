import { expect } from 'chai';
import hre, { ethers } from 'hardhat';
import { FarmingC2N } from '../contract-types';
import { loadFixture, time } from '@nomicfoundation/hardhat-toolbox/network-helpers';

describe('FarmingC2N', function () {
    async function deployC2NTokenFixture() {
        const C2NToken = await hre.ethers.deployContract('C2NToken');
        const c2nToken = await C2NToken.waitForDeployment();
        await c2nToken.mint(await (await hre.ethers.getSigners())[0].getAddress(), 100_000);
        return c2nToken;
    }

    async function deployLpTokens() {
        const LpToken1 = await hre.ethers.deployContract('C2NToken');
        const lpToken1 = await LpToken1.waitForDeployment();
        const LpToken2 = await hre.ethers.deployContract('C2NToken');
        const lpToken2 = await LpToken2.waitForDeployment();
        const LpToken3 = await hre.ethers.deployContract('C2NToken');
        const lpToken3 = await LpToken3.waitForDeployment();
        const LpToken4 = await hre.ethers.deployContract('C2NToken');
        const lpToken4 = await LpToken4.waitForDeployment();
        return { lpToken1, lpToken2, lpToken3, lpToken4 };
    }

    async function deployFarmingC2NFixture() {
        const signers = await hre.ethers.getSigners();
        const deployer = signers[0];
        const c2nToken = await loadFixture(deployC2NTokenFixture);
        const farmingStartTime = (await time.latest()) + 1000;
        const FarmingC2N = await hre.ethers.deployContract(
            'FarmingC2N',
            [await c2nToken.getAddress(), 1, farmingStartTime],
            deployer
        );
        const farmingC2N = await FarmingC2N.waitForDeployment();
        return {
            farmingC2N,
            rewardsToken: c2nToken,
            rewardPerSecond: 1,
            startTime: farmingStartTime,
            owner: deployer.address,
        };
    }

    async function setFarmingC2NWithPoolsFixture() {
        const { farmingC2N, rewardsToken } = await loadFixture(deployFarmingC2NFixture);
        const { lpToken1, lpToken2, lpToken3, lpToken4 } = await loadFixture(deployLpTokens);
        await rewardsToken.approve(await farmingC2N.getAddress(), 100_000);
        await farmingC2N.fund(100_000);
        await farmingC2N.add(10, await lpToken1.getAddress(), Boolean(0));
        await farmingC2N.add(10, await lpToken2.getAddress(), Boolean(0));
        await farmingC2N.add(30, await lpToken3.getAddress(), Boolean(0));
        await farmingC2N.add(50, await lpToken4.getAddress(), Boolean(0));
        return { farmingC2N, lpToken1, lpToken2, lpToken3, lpToken4 };
    }

    async function mintTokensToSigners() {
        const { farmingC2N, lpToken1, lpToken2, lpToken3, lpToken4 } = await loadFixture(setFarmingC2NWithPoolsFixture);
        const signers = await hre.ethers.getSigners();
        const farmingC2NTokenAddr = await farmingC2N.getAddress();

        for (let index = 0; index < signers.length; index++) {
            const signer = signers[index];
            await lpToken1.mint(signer.address, 10000);
            await lpToken2.mint(signer.address, 10000);
            await lpToken3.mint(signer.address, 10000);
            await lpToken4.mint(signer.address, 10000);
            await lpToken1.connect(signer).approve(farmingC2NTokenAddr, 1000);
            await lpToken2.connect(signer).approve(farmingC2NTokenAddr, 1000);
            await lpToken3.connect(signer).approve(farmingC2NTokenAddr, 1000);
            await lpToken4.connect(signer).approve(farmingC2NTokenAddr, 1000);
        }

        return { signers, farmingC2N, lpToken1, lpToken2, lpToken3, lpToken4 };
    }
    describe('deploy', function () {
        it('constructor initializes immutables', async function () {
            const { farmingC2N, rewardsToken, rewardPerSecond, startTime } = await loadFixture(deployFarmingC2NFixture);
            expect(await farmingC2N.erc20()).to.equal(await rewardsToken.getAddress());
            expect(await farmingC2N.rewardPerSecond()).to.equal(rewardPerSecond);
            expect(await farmingC2N.startTimestamp()).to.equal(startTime);
            expect(await farmingC2N.endTimestamp()).to.equal(startTime);
        });

        describe('owner', function () {
            it('owner is deployer', async function () {
                const { farmingC2N, owner: farmingC2NOwner } = await loadFixture(deployFarmingC2NFixture);
                expect(await farmingC2N.owner()).to.equal(farmingC2NOwner);
            });
        });
    });

    describe('fund', function () {
        describe('fail', function () {
            it('farm closed', async function () {
                const { farmingC2N, startTime } = await loadFixture(deployFarmingC2NFixture);
                await time.increaseTo(startTime + 100);
                await expect(farmingC2N.fund(1)).to.be.revertedWith('fund: too late, the farm is closed');
            });
        });

        describe('success', function () {
            it('increase reward token amount', async function () {
                const { farmingC2N, rewardsToken, startTime, rewardPerSecond } = await loadFixture(
                    deployFarmingC2NFixture
                );
                rewardsToken.approve(await farmingC2N.getAddress(), 1000);
                const amount = 100;
                const totalRewards = Number(await farmingC2N.totalRewards());
                await farmingC2N.fund(amount);
                expect(await rewardsToken.balanceOf(await farmingC2N.getAddress())).to.equal(amount);
                expect(await farmingC2N.endTimestamp()).to.equal(startTime + amount / rewardPerSecond);
                expect(await farmingC2N.totalRewards()).to.equal(totalRewards + amount);
            });
        });
    });

    describe('add', function () {
        describe('fail', function () {
            it('not owner', async function () {
                const { farmingC2N } = await loadFixture(deployFarmingC2NFixture);
                const { lpToken1 } = await loadFixture(deployLpTokens);
                const signers = await hre.ethers.getSigners();
                const nonOwner = signers[1];
                expect(await nonOwner.getAddress()).to.not.equal(await farmingC2N.owner());
                await expect(farmingC2N.connect(nonOwner).add(30, await lpToken1.getAddress(), Boolean(0)))
                    .to.be.revertedWithCustomError(farmingC2N, 'OwnableUnauthorizedAccount')
                    .withArgs(nonOwner.address);
            });
        });

        describe('success', function () {
            it('with update', async function () {
                const { farmingC2N } = await loadFixture(deployFarmingC2NFixture);
                const { lpToken1 } = await loadFixture(deployLpTokens);
                const timestamp = await time.latest();
                const farmingStartTimestamp = await farmingC2N.startTimestamp();
                expect(timestamp).to.be.below(farmingStartTimestamp);
                const newLpPool = { lpToken: await lpToken1.getAddress(), allocPoint: 30, withUpdate: Boolean(1) };
                await expect(farmingC2N.add(newLpPool.allocPoint, newLpPool.lpToken, newLpPool.withUpdate)).to.be.not
                    .reverted;
            });
            describe('push pool info', function () {
                it('push pool info before farming start', async function () {
                    const { farmingC2N } = await loadFixture(deployFarmingC2NFixture);
                    const { lpToken1 } = await loadFixture(deployLpTokens);
                    const timestamp = await time.latest();
                    const farmingStartTimestamp = await farmingC2N.startTimestamp();
                    expect(timestamp).to.be.below(farmingStartTimestamp);
                    const newLpPool = { lpToken: await lpToken1.getAddress(), allocPoint: 30, withUpdate: Boolean(0) };
                    await farmingC2N.add(newLpPool.allocPoint, newLpPool.lpToken, newLpPool.withUpdate);
                    const { lpToken, allocPoint, lastRewardTimestamp, accERC20PerShare, totalDeposits } =
                        await farmingC2N.poolInfo(0);
                    expect(lpToken).to.equal(newLpPool.lpToken);
                    expect(allocPoint).to.equal(newLpPool.allocPoint);
                    expect(lastRewardTimestamp).to.equal(farmingStartTimestamp);
                    expect(accERC20PerShare).to.equal(0);
                    expect(totalDeposits).to.equal(0);
                });
                it('push pool info after farming start', async function () {
                    const { farmingC2N } = await loadFixture(deployFarmingC2NFixture);
                    const { lpToken1 } = await loadFixture(deployLpTokens);
                    const newLpPool = { lpToken: await lpToken1.getAddress(), allocPoint: 30, withUpdate: Boolean(0) };
                    await time.increase(10000);
                    const timestamp = await time.latest();
                    const farmingStartTimestamp = await farmingC2N.startTimestamp();
                    expect(farmingStartTimestamp).to.be.below(timestamp);
                    await farmingC2N.add(newLpPool.allocPoint, newLpPool.lpToken, newLpPool.withUpdate);
                    const { lpToken, allocPoint, lastRewardTimestamp, accERC20PerShare, totalDeposits } =
                        await farmingC2N.poolInfo(0);
                    expect(lpToken).to.equal(newLpPool.lpToken);
                    expect(allocPoint).to.equal(newLpPool.allocPoint);
                    expect(lastRewardTimestamp).to.closeTo(timestamp, 10);
                    expect(accERC20PerShare).to.equal(0);
                    expect(totalDeposits).to.equal(0);
                });
            });
        });
    });
    describe('update pool', function () {
        async function calculateExpectedUpdatedPoolInfo(
            rewardPerSecond: number,
            nextRewardTimestamp: number,
            poolLastRewardTimestamp: number,
            poolAllocPoint: number,
            totalAllocPoint: number,
            currentERC20PerShare: number,
            lpSupply: number
        ) {
            const erc20Reward =
                ((nextRewardTimestamp - poolLastRewardTimestamp) * rewardPerSecond * poolAllocPoint) / totalAllocPoint;

            const accERC20PerShare = currentERC20PerShare + (erc20Reward * 1e36) / lpSupply;
            const lastRewardTimestamp = await time.latest();
            return { accERC20PerShare, lastRewardTimestamp };
        }
        describe('with no deposit', function () {
            it('before end time and before last reward time ', async function () {
                const { signers, farmingC2N, lpToken1, lpToken2, lpToken3, lpToken4 } = await loadFixture(
                    mintTokensToSigners
                );
                const { lpToken, allocPoint, lastRewardTimestamp, accERC20PerShare, totalDeposits } =
                    await farmingC2N.poolInfo(0);
                const farmingEndTime = await farmingC2N.endTimestamp();

                const timestamp = await time.latest();
                await farmingC2N.updatePool(0);
                const afterUpdatePoolInfo = await farmingC2N.poolInfo(0);
                expect(farmingEndTime).to.be.above(timestamp);
                expect(lastRewardTimestamp).to.be.above(timestamp);
                expect(afterUpdatePoolInfo.accERC20PerShare).to.equal(0);
                expect(afterUpdatePoolInfo.lastRewardTimestamp).to.equal(lastRewardTimestamp);
            });
            it('before end time and after last reward time ', async function () {
                const { signers, farmingC2N, lpToken1, lpToken2, lpToken3, lpToken4 } = await loadFixture(
                    mintTokensToSigners
                );
                const { lpToken, allocPoint, lastRewardTimestamp, accERC20PerShare, totalDeposits } =
                    await farmingC2N.poolInfo(0);
                const farmingEndTime = await farmingC2N.endTimestamp();
                await time.increaseTo(Number(lastRewardTimestamp) + 10);
                const timestamp = await time.latest();
                await farmingC2N.updatePool(0);
                const afterUpdatePoolInfo = await farmingC2N.poolInfo(0);
                expect(farmingEndTime).to.be.above(timestamp);
                expect(lastRewardTimestamp).to.be.below(timestamp);
                expect(afterUpdatePoolInfo.accERC20PerShare).to.equal(0);
                expect(afterUpdatePoolInfo.lastRewardTimestamp).to.closeTo(timestamp, 10);
            });
            it('after end time ', async function () {
                const { signers, farmingC2N, lpToken1, lpToken2, lpToken3, lpToken4 } = await loadFixture(
                    mintTokensToSigners
                );

                const farmingEndTime = await farmingC2N.endTimestamp();
                await time.increaseTo(Number(farmingEndTime) + 100);
                const timestamp = await time.latest();
                await farmingC2N.updatePool(0);
                const afterUpdatePoolInfo = await farmingC2N.poolInfo(0);
                expect(farmingEndTime).to.be.below(timestamp);
                expect(afterUpdatePoolInfo.accERC20PerShare).to.equal(0);
                expect(afterUpdatePoolInfo.lastRewardTimestamp).to.equal(farmingEndTime);
            });
        });
        describe('with deposit', function () {
            it('before farming start ', async function () {
                const { signers, farmingC2N, lpToken1, lpToken2, lpToken3, lpToken4 } = await loadFixture(
                    mintTokensToSigners
                );

                await farmingC2N.deposit(0, 100);
                const { lpToken, allocPoint, lastRewardTimestamp, accERC20PerShare, totalDeposits } =
                    await farmingC2N.poolInfo(0);
                const farmingStartTime = await farmingC2N.startTimestamp();
                await time.increaseTo(Number(lastRewardTimestamp) + 10);
                const timestamp = await time.latest();
                await farmingC2N.updatePool(0);
                const afterUpdatePoolInfo = await farmingC2N.poolInfo(0);
                expect(farmingStartTime).to.be.below(timestamp);
                expect(afterUpdatePoolInfo.accERC20PerShare).to.equal(BigInt('10000000000000000000000000000000000'));
                expect(afterUpdatePoolInfo.lastRewardTimestamp).to.closeTo(timestamp, 10);
            });
            it('after farming start ', async function () {
                const { signers, farmingC2N, lpToken1, lpToken2, lpToken3, lpToken4 } = await loadFixture(
                    mintTokensToSigners
                );
                await farmingC2N.deposit(0, 100);
                const farmingStartTime = await farmingC2N.startTimestamp();
                await time.increaseTo(Number(farmingStartTime) + 100);
                const timestamp = await time.latest();
                await farmingC2N.updatePool(0);
                const afterUpdatePoolInfo = await farmingC2N.poolInfo(0);
                expect(afterUpdatePoolInfo.accERC20PerShare).to.equal(BigInt('100000000000000000000000000000000000'));
                expect(afterUpdatePoolInfo.lastRewardTimestamp).to.closeTo(timestamp, 10);
            });
        });
    });
});
