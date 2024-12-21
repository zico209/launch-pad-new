export * from './wagmi'
export const appConfig = {
    c2nToken: {
        address: process.env.NEXT_PUBLIC_C2N_TOKEN,
        symbol: 'C2N',
    },
    airpDrop: {
        address: process.env.NEXT_PUBLIC_AIRDROP
    },
    farming: {
        address: process.env.NEXT_PUBLIC_FARMING
    }
}
