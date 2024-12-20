import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, Chain } from 'wagmi/chains'

// 定义本地链
const localChain: Chain = {
    id: 1337, // Chain ID (通常为 1337)
    name: 'Localhost',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['http://127.0.0.1:8545'], // 本地节点的 RPC 地址
        },
        public: {
            http: ['http://127.0.0.1:8545'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'http://localhost:8545',
        },
    },
    testnet: true, // 如果是测试链，设置为 true,
};

export const wagmiConfig = createConfig({
    chains: [mainnet, sepolia, localChain],
    transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
        [localChain.id]: http(),
    },
})