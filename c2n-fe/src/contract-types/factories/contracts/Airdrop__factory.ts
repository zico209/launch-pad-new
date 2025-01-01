/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Airdrop, AirdropInterface } from "../../contracts/Airdrop";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_airdropToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "TokensAirdropped",
    type: "event",
  },
  {
    inputs: [],
    name: "TOKENS_PER_CLAIM",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "airdropToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalTokensWithdrawn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wasClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108d83803806108d88339818101604052810190610032919061011d565b6001600081905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361007357600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061014a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100ea826100bf565b9050919050565b6100fa816100df565b811461010557600080fd5b50565b600081519050610117816100f1565b92915050565b600060208284031215610133576101326100ba565b5b600061014184828501610108565b91505092915050565b61077f806101596000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634d06068a1461005c5780638d8f2adb1461007a578063bd8d8c3214610084578063cac37f93146100b4578063ccfff679146100d2575b600080fd5b6100646100f0565b604051610071919061045c565b60405180910390f35b610082610116565b005b61009e600480360381019061009991906104ba565b61035a565b6040516100ab9190610502565b60405180910390f35b6100bc61037a565b6040516100c99190610536565b60405180910390f35b6100da610380565b6040516100e79190610536565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61011e61038d565b6000339050600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156101b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101a7906105ae565b60405180910390fd5b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8368056bc75e2d631000006040518363ffffffff1660e01b81526004016102709291906105dd565b6020604051808303816000875af115801561028f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b39190610632565b9050806102f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ec906106ab565b60405180910390fd5b68056bc75e2d631000006002600082825461031091906106fa565b925050819055507fdf23082d2b28b19078bc48141d3fdbfd14390048297d149755a09e7edd8129a982604051610346919061072e565b60405180910390a150506103586103d3565b565b60036020528060005260406000206000915054906101000a900460ff1681565b60025481565b68056bc75e2d6310000081565b6002600054036103c9576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002600081905550565b6001600081905550565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061042261041d610418846103dd565b6103fd565b6103dd565b9050919050565b600061043482610407565b9050919050565b600061044682610429565b9050919050565b6104568161043b565b82525050565b6000602082019050610471600083018461044d565b92915050565b600080fd5b6000610487826103dd565b9050919050565b6104978161047c565b81146104a257600080fd5b50565b6000813590506104b48161048e565b92915050565b6000602082840312156104d0576104cf610477565b5b60006104de848285016104a5565b91505092915050565b60008115159050919050565b6104fc816104e7565b82525050565b600060208201905061051760008301846104f3565b92915050565b6000819050919050565b6105308161051d565b82525050565b600060208201905061054b6000830184610527565b92915050565b600082825260208201905092915050565b7f416c726561647920636c61696d65642100000000000000000000000000000000600082015250565b6000610598601083610551565b91506105a382610562565b602082019050919050565b600060208201905081810360008301526105c78161058b565b9050919050565b6105d78161047c565b82525050565b60006040820190506105f260008301856105ce565b6105ff6020830184610527565b9392505050565b61060f816104e7565b811461061a57600080fd5b50565b60008151905061062c81610606565b92915050565b60006020828403121561064857610647610477565b5b60006106568482850161061d565b91505092915050565b7f546f6b656e207472616e73666572207374617475732069732066616c73652e00600082015250565b6000610695601f83610551565b91506106a08261065f565b602082019050919050565b600060208201905081810360008301526106c481610688565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006107058261051d565b91506107108361051d565b9250828201905080821115610728576107276106cb565b5b92915050565b600060208201905061074360008301846105ce565b9291505056fea2646970667358221220eb1b20c92504487ab64d70c417361c87ed5737a7e17a630535675482959376db64736f6c63430008140033";

type AirdropConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AirdropConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Airdrop__factory extends ContractFactory {
  constructor(...args: AirdropConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _airdropToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_airdropToken, overrides || {});
  }
  override deploy(
    _airdropToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_airdropToken, overrides || {}) as Promise<
      Airdrop & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Airdrop__factory {
    return super.connect(runner) as Airdrop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AirdropInterface {
    return new Interface(_abi) as AirdropInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Airdrop {
    return new Contract(address, _abi, runner) as unknown as Airdrop;
  }
}
