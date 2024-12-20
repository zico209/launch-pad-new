'use client'
import React from 'react';
import StoreProvider from '../components/StoreProvider';
import { Web3ContextProvider } from '@/components/Web3ContextProvider';


export const Providers = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <Web3ContextProvider>
            <StoreProvider>
                {children}
            </StoreProvider>
        </Web3ContextProvider>
    )
}

