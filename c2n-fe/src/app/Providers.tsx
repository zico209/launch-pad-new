'use client'
import React from 'react';
import StoreProvider from '../components/StoreProvider';
import { Web3ContextProvider } from '@/components/Web3ContextProvider';
import { listenToWallet } from '@/hooks/useWallet'

// TODO : 关于Next.js和RTK的问题：我希望网站加载时调用listenToWallet，这是我的临时解决方案，想请问最佳实践是什么
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

