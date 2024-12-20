import { PropsWithChildren, createContext, useContext, useEffect } from 'react'
import { UserRejectedRequestError } from 'viem'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { ResolvedRegister, UseConnectReturnType, useConnect as useConnectWagmi } from 'wagmi'

const ConnectionContext = createContext<UseConnectReturnType<ResolvedRegister['config']> | undefined>(undefined)

export function ConnectionProvider({ children }: PropsWithChildren) {

  const connection = useConnectWagmi({
    mutation: {
      onError(error, { connector }) {
        if (error instanceof UserRejectedRequestError) {
          connection.reset()
          return
        }
      },
    },
  })

  return <ConnectionContext.Provider value={connection}>{children}</ConnectionContext.Provider>
}

/**
 * Wraps wagmi.useConnect in a singleton provider to provide the same connect state to all callers.
 * @see {@link https://wagmi.sh/react/api/hooks/useConnect}
 */
export function useConnect() {
  const value = useContext(ConnectionContext)
  if (!value) {
    throw new Error('useConnect must be used within a ConnectionProvider')
  }
  return value
}
