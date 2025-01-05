const { execSync } = require('child_process');

try {
  console.log('Deploying C2N Token...');
  execSync('npx hardhat run scripts/deployments/deploy_c2n_token.ts --network localhost', { stdio: 'inherit' });

  console.log('Deploying Airdrop C2N...');
  execSync('npx hardhat run scripts/deployments/deploy_airdrop_c2n.ts --network localhost', { stdio: 'inherit' });

  console.log('Deploying Farm...');
  execSync('npx hardhat run scripts/deployments/deploy_farm.ts --network localhost', { stdio: 'inherit' });

  console.log('All deployments completed successfully!');
} catch (error) {
  console.error('An error occurred during the deployment process:', error.message);
  process.exit(1);
}
