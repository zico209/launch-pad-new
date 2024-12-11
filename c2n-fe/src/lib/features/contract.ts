import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Signer, Contract } from 'ethers';

// 定义 State 的类型
interface ContractState {
  walletAddress: string | null;
  signer: Signer | null;
  stakingContract: Contract | null;
  saleContract: Contract | null;
  depositTokenContract: Contract | null;
  breContract: Contract | null;
  contractsReady: boolean;
  balance?: number;
  symbol?: string;
  earnedSymbol?: string;
  deposited?: number;
  allowance?: number;
  loading: boolean;
}

// 定义初始状态
const initialState: ContractState = {
  walletAddress: null,
  signer: null,
  stakingContract: null,
  saleContract: null,
  depositTokenContract: null,
  breContract: null,
  contractsReady: false,
  balance: undefined,
  symbol: undefined,
  earnedSymbol: undefined,
  deposited: undefined,
  allowance: undefined,
  loading: false,
};

// 创建 Slice
const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setWalletAddress(state, action: PayloadAction<string | null>) {
      state.walletAddress = action.payload;
    },
    setSigner(state, action: PayloadAction<Signer | null>) {
      state.signer = action.payload;
    },
    setContracts(
      state,
      action: PayloadAction<{
        stakingContract?: Contract | null;
        saleContract?: Contract | null;
        depositTokenContract?: Contract | null;
        breContract?: Contract | null;
      }>
    ) {
      Object.assign(state, action.payload, { contractsReady: true });
    },
    setBalance(state, action: PayloadAction<number | undefined>) {
      state.balance = action.payload;
    },
    setSymbol(state, action: PayloadAction<string | undefined>) {
      state.symbol = action.payload;
    },
    setEarnedSymbol(state, action: PayloadAction<string | undefined>) {
      state.earnedSymbol = action.payload;
    },
    setDeposited(state, action: PayloadAction<number | undefined>) {
      state.deposited = action.payload;
    },
    setAllowance(state, action: PayloadAction<number | undefined>) {
      state.allowance = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

// 导出 action
export const {
  setWalletAddress,
  setSigner,
  setContracts,
  setBalance,
  setSymbol,
  setEarnedSymbol,
  setDeposited,
  setAllowance,
  setLoading,
} = contractSlice.actions;

// 导出 reducer
export default contractSlice.reducer;
