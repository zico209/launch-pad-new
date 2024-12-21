/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface FarmingC2NInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "add"
      | "deposit"
      | "deposited"
      | "emergencyWithdraw"
      | "endTimestamp"
      | "erc20"
      | "fund"
      | "massUpdatePools"
      | "owner"
      | "paidOut"
      | "pending"
      | "poolInfo"
      | "poolLength"
      | "renounceOwnership"
      | "rewardPerSecond"
      | "set"
      | "startTimestamp"
      | "totalAllocPoint"
      | "totalPending"
      | "totalRewards"
      | "transferOwnership"
      | "updatePool"
      | "userInfo"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Deposit"
      | "EmergencyWithdraw"
      | "OwnershipTransferred"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "add",
    values: [BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposited",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "endTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "erc20", values?: undefined): string;
  encodeFunctionData(functionFragment: "fund", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paidOut", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pending",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardPerSecond",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "startTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalPending",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposited", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "endTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "erc20", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paidOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pending", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace DepositEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EmergencyWithdrawEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FarmingC2N extends BaseContract {
  connect(runner?: ContractRunner | null): FarmingC2N;
  waitForDeployment(): Promise<this>;

  interface: FarmingC2NInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  add: TypedContractMethod<
    [_allocPoint: BigNumberish, _lpToken: AddressLike, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;

  deposit: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  deposited: TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [bigint],
    "view"
  >;

  emergencyWithdraw: TypedContractMethod<
    [_pid: BigNumberish],
    [void],
    "nonpayable"
  >;

  endTimestamp: TypedContractMethod<[], [bigint], "view">;

  erc20: TypedContractMethod<[], [string], "view">;

  fund: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  massUpdatePools: TypedContractMethod<[], [void], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  paidOut: TypedContractMethod<[], [bigint], "view">;

  pending: TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [bigint],
    "view"
  >;

  poolInfo: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint, bigint] & {
        lpToken: string;
        allocPoint: bigint;
        lastRewardTimestamp: bigint;
        accERC20PerShare: bigint;
        totalDeposits: bigint;
      }
    ],
    "view"
  >;

  poolLength: TypedContractMethod<[], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  rewardPerSecond: TypedContractMethod<[], [bigint], "view">;

  set: TypedContractMethod<
    [_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;

  startTimestamp: TypedContractMethod<[], [bigint], "view">;

  totalAllocPoint: TypedContractMethod<[], [bigint], "view">;

  totalPending: TypedContractMethod<[], [bigint], "view">;

  totalRewards: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  updatePool: TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;

  userInfo: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { amount: bigint; rewardDebt: bigint }],
    "view"
  >;

  withdraw: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "add"
  ): TypedContractMethod<
    [_allocPoint: BigNumberish, _lpToken: AddressLike, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposited"
  ): TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "emergencyWithdraw"
  ): TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "endTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "erc20"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fund"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "massUpdatePools"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "paidOut"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pending"
  ): TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "poolInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint, bigint] & {
        lpToken: string;
        allocPoint: bigint;
        lastRewardTimestamp: bigint;
        accERC20PerShare: bigint;
        totalDeposits: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "poolLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardPerSecond"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "set"
  ): TypedContractMethod<
    [_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "startTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalAllocPoint"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalPending"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalRewards"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updatePool"
  ): TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "userInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { amount: bigint; rewardDebt: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "EmergencyWithdraw"
  ): TypedContractEvent<
    EmergencyWithdrawEvent.InputTuple,
    EmergencyWithdrawEvent.OutputTuple,
    EmergencyWithdrawEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "Deposit(address,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "EmergencyWithdraw(address,uint256,uint256)": TypedContractEvent<
      EmergencyWithdrawEvent.InputTuple,
      EmergencyWithdrawEvent.OutputTuple,
      EmergencyWithdrawEvent.OutputObject
    >;
    EmergencyWithdraw: TypedContractEvent<
      EmergencyWithdrawEvent.InputTuple,
      EmergencyWithdrawEvent.OutputTuple,
      EmergencyWithdrawEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Withdraw(address,uint256,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}