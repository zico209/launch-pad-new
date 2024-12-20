import { validChains } from '@/config'

export function useIsSupportedChains(chainId?: number | undefined) {
    if (!chainId) {
        return false;
    }
    const chain = validChains.find(v => v.chainId == chainId);
    return chain != undefined;
}