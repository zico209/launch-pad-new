import { expect } from 'chai';
import hre from 'hardhat';
import { FarmingC2N } from '../contract-types';
import { loadFixture, time } from '@nomicfoundation/hardhat-toolbox/network-helpers';

describe('FarmingC2N', function () {
    async function deployC2NTokenFixture() {
        const C2NToken = await hre.ethers.deployContract('C2NToken');
        const c2nToken = await C2NToken.waitForDeployment();
        await c2nToken.mint(await (await hre.ethers.getSigners())[0].getAddress(), 1000);
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
        const farmingStartTime = (await time.latest()) + 100;
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
            xit('', async function () {});
        });
    });
});
