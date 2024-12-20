"use client";
import React, { ReactNode, useEffect, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount, } from 'wagmi'
import { wagmiConfig } from '@/config/index'
import { useEthersProvider } from '@/hooks/useEthersProvider'
import { useIsSupportedChains } from '@/hooks/useEnableChains'
import { useSetAtom } from 'jotai'
import usePrevious from '@/hooks/usePrevious'
import { ConnectionProvider } from '@/hooks/useConnect'

const queryClient = new QueryClient()
export function Web3ProviderUpdater() {
  const account = useAccount()
  const provider = useEthersProvider()

  const isSupportedChain = useIsSupportedChains(account.chainId)
  const { connector } = useAccount()

  const previousConnectedChainId = usePrevious(account.chainId)
  // Send analytics events when the active account changes.
  const previousAccount = usePrevious(account.address)
  useEffect(() => {
    if (account.address && account.address !== previousAccount) {
      // TODO
    }
  })

  return null
}
export const Web3ContextProvider = ({
  children
}: PropsWithChildren) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectionProvider>
          {children}
        </ConnectionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
