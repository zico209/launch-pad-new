export * from './valid_chains'
export * from './wagmi'

export const appConfig = {
    address: {
        stakeToken: process.env.STAKED_TOKEN_ADDRESS,
        earnedToken: process.env.EARNED_TOKEN_ADDRESS
    }
}
