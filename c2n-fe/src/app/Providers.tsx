'use client'
import React from 'react';
import StoreProvider from '../components/StoreProvider';
import { Web3ContextProvider } from '@/components/Web3ContextProvider';
import { listenToWallet } from '@/hooks/useWallet'

const Start = () => {
    listenToWallet()
    return (<></>)
}

export const Providers = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <Web3ContextProvider>
            <StoreProvider>
                <Start></Start>
                {children}
            </StoreProvider>
        </Web3ContextProvider>
    )
}

