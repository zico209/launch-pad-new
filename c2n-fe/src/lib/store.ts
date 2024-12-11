import { configureStore } from '@reduxjs/toolkit'
import contractReducer from './features/contract'
import walletReducer from './features/wallet'
export const makeStore = () => {
    return configureStore({
        reducer: {
            contract: contractReducer,
            wallet: walletReducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']