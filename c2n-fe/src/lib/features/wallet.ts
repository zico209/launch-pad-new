import { LPN } from '@/types/global';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrowserProvider, Signer } from 'ethers';

// 定义 State 类型
interface WalletState {
    wallet: Signer | null;
    account: string | null;
    connecting: boolean;
    show: boolean;
    chain?: LPN.Chain;
    ethToUsd: number;
    isWalletInstalled: boolean;
}

// 定义初始状态
const initialState: WalletState = {
    wallet: null,
    account: null,
    connecting: false,
    show: false,
    chain: undefined,
    ethToUsd: 0,
    isWalletInstalled: true,
};

// 异步 thunk：初始化账户
export const initAccount = createAsyncThunk<string | null>(
    'wallet/initAccount',
    async () => {
        const accounts = await window.ethereum?.request({ method: 'eth_requestAccounts' });
        return accounts?.[0] || null;
    }
);

// 异步 thunk：初始化钱包
export const initWallet = createAsyncThunk<Signer | null>(
    'wallet/initWallet',
    async () => {
        if (!window.ethereum) return null;
        const provider = new BrowserProvider(window.ethereum);
        return provider.getSigner();
    }
);

// 使用 createSlice 创建 Slice
const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setAccount(state, action: PayloadAction<string | null>) {
            state.account = action.payload;
        },
        setWallet(state, action: PayloadAction<Signer | null>) {
            state.wallet = action.payload;
        },
        setConnecting(state, action: PayloadAction<boolean>) {
            state.connecting = action.payload;
        },
        showWallet(state, action: PayloadAction<boolean>) {
            state.show = action.payload;
        },
        setChain(state, action: PayloadAction<LPN.Chain | undefined>) {
            state.chain = action.payload;
        },
        setEthToUsd(state, action: PayloadAction<number>) {
            state.ethToUsd = action.payload;
        },
        setIsWalletInstalled(state, action: PayloadAction<boolean>) {
            state.isWalletInstalled = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(initAccount.fulfilled, (state, action) => {
                state.account = action.payload;
            })
            .addCase(initWallet.fulfilled, (state, action) => {
                state.wallet = action.payload;
            });
    },
});

// 导出 Actions
export const {
    setAccount,
    setWallet,
    setConnecting,
    showWallet,
    setChain,
    setEthToUsd,
    setIsWalletInstalled,
} = walletSlice.actions;

// 导出 Reducer
export default walletSlice.reducer;
