
复制.env.example并创建修改.env文件添加钱包助记词
```bash
cd c2n-contracts
npm i
npx hardhat node
npx hardhat run scripts/deployments/deploy_c2n_token.ts --network localhost
npx hardhat run scripts/deployments/deploy_airdrop_c2n.ts --network localhost
```

复制.env.example并创建修改.env文件

```bash
cd c2n-fe
npm run dev
```

主页右上角连接metamask使用账号1（创建合约的账号），切localhost，点击Claim C2N可以成功。
点击右上角Disconnect再连接账号2，点击Add C2N to Wallet然后点击Claim C2N报错


