'use client'
import { useRef, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { setSigner, setWalletAddress } from '@/lib/features/contract'
import { setChain } from '@/lib/features/wallet'
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
import { message } from 'antd'
import { validChains } from '@/config'
// TODO ：当使用wagmi时，封装一些hook即可，不需要再维护一个wallet store（src/lib/feature/wallet.ts），我理解对吗？
export function listenToWallet() {
    const dispatch = useAppDispatch();

    const { address, isConnected, chainId } = useAccount();
    const { connect, connectors } = useConnect();

    useEffect(() => {
        if (!isConnected && connectors.length > 0) {
            connect({ connector: connectors[0] });
        }
    }, [connectors]);

    useEffect(() => {
        handleAccountsChanged(address)
    }, [address]);

    useEffect(() => {
        handleChainChanged(chainId);
    }, [chainId]);

    async function handleAccountsChanged(account?: string) {

    }

    async function handleChainChanged(chainId?: number) {
        const chain = validChains.find(v => v.chainId == chainId);
        if (!chain) {
            return;
        }
        dispatch(setChain(chain));
    }
}

