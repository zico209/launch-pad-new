// Code generated - DO NOT EDIT.
// This file is a generated binding and any manual changes will be lost.

package farmingC2N

import (
	"errors"
	"math/big"
	"strings"

	ethereum "github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/event"
)

// Reference imports to suppress errors if they are not otherwise used.
var (
	_ = errors.New
	_ = big.NewInt
	_ = strings.NewReader
	_ = ethereum.NotFound
	_ = bind.Bind
	_ = common.Big1
	_ = types.BloomLookup
	_ = event.NewSubscription
	_ = abi.ConvertType
)

// FarmingC2NMetaData contains all meta data concerning the FarmingC2N contract.
var FarmingC2NMetaData = &bind.MetaData{
	ABI: "[{\"inputs\":[{\"internalType\":\"contractIERC20\",\"name\":\"_erc20\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_rewardPerSecond\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_startTimestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"OwnableInvalidOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"OwnableUnauthorizedAccount\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"token\",\"type\":\"address\"}],\"name\":\"SafeERC20FailedOperation\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"pid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"pid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"EmergencyWithdraw\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"pid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_allocPoint\",\"type\":\"uint256\"},{\"internalType\":\"contractIERC20\",\"name\":\"_lpToken\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_withUpdate\",\"type\":\"bool\"}],\"name\":\"add\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"name\":\"deposited\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"}],\"name\":\"emergencyWithdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"endTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"erc20\",\"outputs\":[{\"internalType\":\"contractIERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"fund\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"massUpdatePools\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paidOut\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"name\":\"pending\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"poolInfo\",\"outputs\":[{\"internalType\":\"contractIERC20\",\"name\":\"lpToken\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"allocPoint\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lastRewardTimestamp\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"accERC20PerShare\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"totalDeposits\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"poolLength\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rewardPerSecond\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_allocPoint\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_withUpdate\",\"type\":\"bool\"}],\"name\":\"set\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startTimestamp\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAllocPoint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalPending\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalRewards\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"}],\"name\":\"updatePool\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"userInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"rewardDebt\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_pid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
}

// FarmingC2NABI is the input ABI used to generate the binding from.
// Deprecated: Use FarmingC2NMetaData.ABI instead.
var FarmingC2NABI = FarmingC2NMetaData.ABI

// FarmingC2N is an auto generated Go binding around an Ethereum contract.
type FarmingC2N struct {
	FarmingC2NCaller     // Read-only binding to the contract
	FarmingC2NTransactor // Write-only binding to the contract
	FarmingC2NFilterer   // Log filterer for contract events
}

// FarmingC2NCaller is an auto generated read-only Go binding around an Ethereum contract.
type FarmingC2NCaller struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// FarmingC2NTransactor is an auto generated write-only Go binding around an Ethereum contract.
type FarmingC2NTransactor struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// FarmingC2NFilterer is an auto generated log filtering Go binding around an Ethereum contract events.
type FarmingC2NFilterer struct {
	contract *bind.BoundContract // Generic contract wrapper for the low level calls
}

// FarmingC2NSession is an auto generated Go binding around an Ethereum contract,
// with pre-set call and transact options.
type FarmingC2NSession struct {
	Contract     *FarmingC2N       // Generic contract binding to set the session for
	CallOpts     bind.CallOpts     // Call options to use throughout this session
	TransactOpts bind.TransactOpts // Transaction auth options to use throughout this session
}

// FarmingC2NCallerSession is an auto generated read-only Go binding around an Ethereum contract,
// with pre-set call options.
type FarmingC2NCallerSession struct {
	Contract *FarmingC2NCaller // Generic contract caller binding to set the session for
	CallOpts bind.CallOpts     // Call options to use throughout this session
}

// FarmingC2NTransactorSession is an auto generated write-only Go binding around an Ethereum contract,
// with pre-set transact options.
type FarmingC2NTransactorSession struct {
	Contract     *FarmingC2NTransactor // Generic contract transactor binding to set the session for
	TransactOpts bind.TransactOpts     // Transaction auth options to use throughout this session
}

// FarmingC2NRaw is an auto generated low-level Go binding around an Ethereum contract.
type FarmingC2NRaw struct {
	Contract *FarmingC2N // Generic contract binding to access the raw methods on
}

// FarmingC2NCallerRaw is an auto generated low-level read-only Go binding around an Ethereum contract.
type FarmingC2NCallerRaw struct {
	Contract *FarmingC2NCaller // Generic read-only contract binding to access the raw methods on
}

// FarmingC2NTransactorRaw is an auto generated low-level write-only Go binding around an Ethereum contract.
type FarmingC2NTransactorRaw struct {
	Contract *FarmingC2NTransactor // Generic write-only contract binding to access the raw methods on
}

// NewFarmingC2N creates a new instance of FarmingC2N, bound to a specific deployed contract.
func NewFarmingC2N(address common.Address, backend bind.ContractBackend) (*FarmingC2N, error) {
	contract, err := bindFarmingC2N(address, backend, backend, backend)
	if err != nil {
		return nil, err
	}
	return &FarmingC2N{FarmingC2NCaller: FarmingC2NCaller{contract: contract}, FarmingC2NTransactor: FarmingC2NTransactor{contract: contract}, FarmingC2NFilterer: FarmingC2NFilterer{contract: contract}}, nil
}

// NewFarmingC2NCaller creates a new read-only instance of FarmingC2N, bound to a specific deployed contract.
func NewFarmingC2NCaller(address common.Address, caller bind.ContractCaller) (*FarmingC2NCaller, error) {
	contract, err := bindFarmingC2N(address, caller, nil, nil)
	if err != nil {
		return nil, err
	}
	return &FarmingC2NCaller{contract: contract}, nil
}

// NewFarmingC2NTransactor creates a new write-only instance of FarmingC2N, bound to a specific deployed contract.
func NewFarmingC2NTransactor(address common.Address, transactor bind.ContractTransactor) (*FarmingC2NTransactor, error) {
	contract, err := bindFarmingC2N(address, nil, transactor, nil)
	if err != nil {
		return nil, err
	}
	return &FarmingC2NTransactor{contract: contract}, nil
}

// NewFarmingC2NFilterer creates a new log filterer instance of FarmingC2N, bound to a specific deployed contract.
func NewFarmingC2NFilterer(address common.Address, filterer bind.ContractFilterer) (*FarmingC2NFilterer, error) {
	contract, err := bindFarmingC2N(address, nil, nil, filterer)
	if err != nil {
		return nil, err
	}
	return &FarmingC2NFilterer{contract: contract}, nil
}

// bindFarmingC2N binds a generic wrapper to an already deployed contract.
func bindFarmingC2N(address common.Address, caller bind.ContractCaller, transactor bind.ContractTransactor, filterer bind.ContractFilterer) (*bind.BoundContract, error) {
	parsed, err := FarmingC2NMetaData.GetAbi()
	if err != nil {
		return nil, err
	}
	return bind.NewBoundContract(address, *parsed, caller, transactor, filterer), nil
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_FarmingC2N *FarmingC2NRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _FarmingC2N.Contract.FarmingC2NCaller.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_FarmingC2N *FarmingC2NRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _FarmingC2N.Contract.FarmingC2NTransactor.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_FarmingC2N *FarmingC2NRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _FarmingC2N.Contract.FarmingC2NTransactor.contract.Transact(opts, method, params...)
}

// Call invokes the (constant) contract method with params as input values and
// sets the output to result. The result type might be a single field for simple
// returns, a slice of interfaces for anonymous returns and a struct for named
// returns.
func (_FarmingC2N *FarmingC2NCallerRaw) Call(opts *bind.CallOpts, result *[]interface{}, method string, params ...interface{}) error {
	return _FarmingC2N.Contract.contract.Call(opts, result, method, params...)
}

// Transfer initiates a plain transaction to move funds to the contract, calling
// its default method if one is available.
func (_FarmingC2N *FarmingC2NTransactorRaw) Transfer(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _FarmingC2N.Contract.contract.Transfer(opts)
}

// Transact invokes the (paid) contract method with params as input values.
func (_FarmingC2N *FarmingC2NTransactorRaw) Transact(opts *bind.TransactOpts, method string, params ...interface{}) (*types.Transaction, error) {
	return _FarmingC2N.Contract.contract.Transact(opts, method, params...)
}

// Deposited is a free data retrieval call binding the contract method 0xa2383106.
//
// Solidity: function deposited(uint256 _pid, address _user) view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) Deposited(opts *bind.CallOpts, _pid *big.Int, _user common.Address) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "deposited", _pid, _user)

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// Deposited is a free data retrieval call binding the contract method 0xa2383106.
//
// Solidity: function deposited(uint256 _pid, address _user) view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) Deposited(_pid *big.Int, _user common.Address) (*big.Int, error) {
	return _FarmingC2N.Contract.Deposited(&_FarmingC2N.CallOpts, _pid, _user)
}

// Deposited is a free data retrieval call binding the contract method 0xa2383106.
//
// Solidity: function deposited(uint256 _pid, address _user) view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) Deposited(_pid *big.Int, _user common.Address) (*big.Int, error) {
	return _FarmingC2N.Contract.Deposited(&_FarmingC2N.CallOpts, _pid, _user)
}

// EndTimestamp is a free data retrieval call binding the contract method 0xa85adeab.
//
// Solidity: function endTimestamp() view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) EndTimestamp(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "endTimestamp")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// EndTimestamp is a free data retrieval call binding the contract method 0xa85adeab.
//
// Solidity: function endTimestamp() view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) EndTimestamp() (*big.Int, error) {
	return _FarmingC2N.Contract.EndTimestamp(&_FarmingC2N.CallOpts)
}

// EndTimestamp is a free data retrieval call binding the contract method 0xa85adeab.
//
// Solidity: function endTimestamp() view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) EndTimestamp() (*big.Int, error) {
	return _FarmingC2N.Contract.EndTimestamp(&_FarmingC2N.CallOpts)
}

// Erc20 is a free data retrieval call binding the contract method 0x785e9e86.
//
// Solidity: function erc20() view returns(address)
func (_FarmingC2N *FarmingC2NCaller) Erc20(opts *bind.CallOpts) (common.Address, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "erc20")

	if err != nil {
		return *new(common.Address), err
	}

	out0 := *abi.ConvertType(out[0], new(common.Address)).(*common.Address)

	return out0, err

}

// Erc20 is a free data retrieval call binding the contract method 0x785e9e86.
//
// Solidity: function erc20() view returns(address)
func (_FarmingC2N *FarmingC2NSession) Erc20() (common.Address, error) {
	return _FarmingC2N.Contract.Erc20(&_FarmingC2N.CallOpts)
}

// Erc20 is a free data retrieval call binding the contract method 0x785e9e86.
//
// Solidity: function erc20() view returns(address)
func (_FarmingC2N *FarmingC2NCallerSession) Erc20() (common.Address, error) {
	return _FarmingC2N.Contract.Erc20(&_FarmingC2N.CallOpts)
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_FarmingC2N *FarmingC2NCaller) Owner(opts *bind.CallOpts) (common.Address, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "owner")

	if err != nil {
		return *new(common.Address), err
	}

	out0 := *abi.ConvertType(out[0], new(common.Address)).(*common.Address)

	return out0, err

}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_FarmingC2N *FarmingC2NSession) Owner() (common.Address, error) {
	return _FarmingC2N.Contract.Owner(&_FarmingC2N.CallOpts)
}

// Owner is a free data retrieval call binding the contract method 0x8da5cb5b.
//
// Solidity: function owner() view returns(address)
func (_FarmingC2N *FarmingC2NCallerSession) Owner() (common.Address, error) {
	return _FarmingC2N.Contract.Owner(&_FarmingC2N.CallOpts)
}

// PaidOut is a free data retrieval call binding the contract method 0x5c76ca2d.
//
// Solidity: function paidOut() view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) PaidOut(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "paidOut")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// PaidOut is a free data retrieval call binding the contract method 0x5c76ca2d.
//
// Solidity: function paidOut() view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) PaidOut() (*big.Int, error) {
	return _FarmingC2N.Contract.PaidOut(&_FarmingC2N.CallOpts)
}

// PaidOut is a free data retrieval call binding the contract method 0x5c76ca2d.
//
// Solidity: function paidOut() view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) PaidOut() (*big.Int, error) {
	return _FarmingC2N.Contract.PaidOut(&_FarmingC2N.CallOpts)
}

// Pending is a free data retrieval call binding the contract method 0xe4c75c27.
//
// Solidity: function pending(uint256 _pid, address _user) view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) Pending(opts *bind.CallOpts, _pid *big.Int, _user common.Address) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "pending", _pid, _user)

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// Pending is a free data retrieval call binding the contract method 0xe4c75c27.
//
// Solidity: function pending(uint256 _pid, address _user) view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) Pending(_pid *big.Int, _user common.Address) (*big.Int, error) {
	return _FarmingC2N.Contract.Pending(&_FarmingC2N.CallOpts, _pid, _user)
}

// Pending is a free data retrieval call binding the contract method 0xe4c75c27.
//
// Solidity: function pending(uint256 _pid, address _user) view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) Pending(_pid *big.Int, _user common.Address) (*big.Int, error) {
	return _FarmingC2N.Contract.Pending(&_FarmingC2N.CallOpts, _pid, _user)
}

// PoolInfo is a free data retrieval call binding the contract method 0x1526fe27.
//
// Solidity: function poolInfo(uint256 ) view returns(address lpToken, uint256 allocPoint, uint256 lastRewardTimestamp, uint256 accERC20PerShare, uint256 totalDeposits)
func (_FarmingC2N *FarmingC2NCaller) PoolInfo(opts *bind.CallOpts, arg0 *big.Int) (struct {
	LpToken             common.Address
	AllocPoint          *big.Int
	LastRewardTimestamp *big.Int
	AccERC20PerShare    *big.Int
	TotalDeposits       *big.Int
}, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "poolInfo", arg0)

	outstruct := new(struct {
		LpToken             common.Address
		AllocPoint          *big.Int
		LastRewardTimestamp *big.Int
		AccERC20PerShare    *big.Int
		TotalDeposits       *big.Int
	})
	if err != nil {
		return *outstruct, err
	}

	outstruct.LpToken = *abi.ConvertType(out[0], new(common.Address)).(*common.Address)
	outstruct.AllocPoint = *abi.ConvertType(out[1], new(*big.Int)).(**big.Int)
	outstruct.LastRewardTimestamp = *abi.ConvertType(out[2], new(*big.Int)).(**big.Int)
	outstruct.AccERC20PerShare = *abi.ConvertType(out[3], new(*big.Int)).(**big.Int)
	outstruct.TotalDeposits = *abi.ConvertType(out[4], new(*big.Int)).(**big.Int)

	return *outstruct, err

}

// PoolInfo is a free data retrieval call binding the contract method 0x1526fe27.
//
// Solidity: function poolInfo(uint256 ) view returns(address lpToken, uint256 allocPoint, uint256 lastRewardTimestamp, uint256 accERC20PerShare, uint256 totalDeposits)
func (_FarmingC2N *FarmingC2NSession) PoolInfo(arg0 *big.Int) (struct {
	LpToken             common.Address
	AllocPoint          *big.Int
	LastRewardTimestamp *big.Int
	AccERC20PerShare    *big.Int
	TotalDeposits       *big.Int
}, error) {
	return _FarmingC2N.Contract.PoolInfo(&_FarmingC2N.CallOpts, arg0)
}

// PoolInfo is a free data retrieval call binding the contract method 0x1526fe27.
//
// Solidity: function poolInfo(uint256 ) view returns(address lpToken, uint256 allocPoint, uint256 lastRewardTimestamp, uint256 accERC20PerShare, uint256 totalDeposits)
func (_FarmingC2N *FarmingC2NCallerSession) PoolInfo(arg0 *big.Int) (struct {
	LpToken             common.Address
	AllocPoint          *big.Int
	LastRewardTimestamp *big.Int
	AccERC20PerShare    *big.Int
	TotalDeposits       *big.Int
}, error) {
	return _FarmingC2N.Contract.PoolInfo(&_FarmingC2N.CallOpts, arg0)
}

// PoolLength is a free data retrieval call binding the contract method 0x081e3eda.
//
// Solidity: function poolLength() view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) PoolLength(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "poolLength")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// PoolLength is a free data retrieval call binding the contract method 0x081e3eda.
//
// Solidity: function poolLength() view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) PoolLength() (*big.Int, error) {
	return _FarmingC2N.Contract.PoolLength(&_FarmingC2N.CallOpts)
}

// PoolLength is a free data retrieval call binding the contract method 0x081e3eda.
//
// Solidity: function poolLength() view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) PoolLength() (*big.Int, error) {
	return _FarmingC2N.Contract.PoolLength(&_FarmingC2N.CallOpts)
}

// RewardPerSecond is a free data retrieval call binding the contract method 0x8f10369a.
//
// Solidity: function rewardPerSecond() view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) RewardPerSecond(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "rewardPerSecond")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// RewardPerSecond is a free data retrieval call binding the contract method 0x8f10369a.
//
// Solidity: function rewardPerSecond() view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) RewardPerSecond() (*big.Int, error) {
	return _FarmingC2N.Contract.RewardPerSecond(&_FarmingC2N.CallOpts)
}

// RewardPerSecond is a free data retrieval call binding the contract method 0x8f10369a.
//
// Solidity: function rewardPerSecond() view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) RewardPerSecond() (*big.Int, error) {
	return _FarmingC2N.Contract.RewardPerSecond(&_FarmingC2N.CallOpts)
}

// StartTimestamp is a free data retrieval call binding the contract method 0xe6fd48bc.
//
// Solidity: function startTimestamp() view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) StartTimestamp(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "startTimestamp")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// StartTimestamp is a free data retrieval call binding the contract method 0xe6fd48bc.
//
// Solidity: function startTimestamp() view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) StartTimestamp() (*big.Int, error) {
	return _FarmingC2N.Contract.StartTimestamp(&_FarmingC2N.CallOpts)
}

// StartTimestamp is a free data retrieval call binding the contract method 0xe6fd48bc.
//
// Solidity: function startTimestamp() view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) StartTimestamp() (*big.Int, error) {
	return _FarmingC2N.Contract.StartTimestamp(&_FarmingC2N.CallOpts)
}

// TotalAllocPoint is a free data retrieval call binding the contract method 0x17caf6f1.
//
// Solidity: function totalAllocPoint() view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) TotalAllocPoint(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "totalAllocPoint")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// TotalAllocPoint is a free data retrieval call binding the contract method 0x17caf6f1.
//
// Solidity: function totalAllocPoint() view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) TotalAllocPoint() (*big.Int, error) {
	return _FarmingC2N.Contract.TotalAllocPoint(&_FarmingC2N.CallOpts)
}

// TotalAllocPoint is a free data retrieval call binding the contract method 0x17caf6f1.
//
// Solidity: function totalAllocPoint() view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) TotalAllocPoint() (*big.Int, error) {
	return _FarmingC2N.Contract.TotalAllocPoint(&_FarmingC2N.CallOpts)
}

// TotalPending is a free data retrieval call binding the contract method 0x3f90916a.
//
// Solidity: function totalPending() view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) TotalPending(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "totalPending")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// TotalPending is a free data retrieval call binding the contract method 0x3f90916a.
//
// Solidity: function totalPending() view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) TotalPending() (*big.Int, error) {
	return _FarmingC2N.Contract.TotalPending(&_FarmingC2N.CallOpts)
}

// TotalPending is a free data retrieval call binding the contract method 0x3f90916a.
//
// Solidity: function totalPending() view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) TotalPending() (*big.Int, error) {
	return _FarmingC2N.Contract.TotalPending(&_FarmingC2N.CallOpts)
}

// TotalRewards is a free data retrieval call binding the contract method 0x0e15561a.
//
// Solidity: function totalRewards() view returns(uint256)
func (_FarmingC2N *FarmingC2NCaller) TotalRewards(opts *bind.CallOpts) (*big.Int, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "totalRewards")

	if err != nil {
		return *new(*big.Int), err
	}

	out0 := *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)

	return out0, err

}

// TotalRewards is a free data retrieval call binding the contract method 0x0e15561a.
//
// Solidity: function totalRewards() view returns(uint256)
func (_FarmingC2N *FarmingC2NSession) TotalRewards() (*big.Int, error) {
	return _FarmingC2N.Contract.TotalRewards(&_FarmingC2N.CallOpts)
}

// TotalRewards is a free data retrieval call binding the contract method 0x0e15561a.
//
// Solidity: function totalRewards() view returns(uint256)
func (_FarmingC2N *FarmingC2NCallerSession) TotalRewards() (*big.Int, error) {
	return _FarmingC2N.Contract.TotalRewards(&_FarmingC2N.CallOpts)
}

// UserInfo is a free data retrieval call binding the contract method 0x93f1a40b.
//
// Solidity: function userInfo(uint256 , address ) view returns(uint256 amount, uint256 rewardDebt)
func (_FarmingC2N *FarmingC2NCaller) UserInfo(opts *bind.CallOpts, arg0 *big.Int, arg1 common.Address) (struct {
	Amount     *big.Int
	RewardDebt *big.Int
}, error) {
	var out []interface{}
	err := _FarmingC2N.contract.Call(opts, &out, "userInfo", arg0, arg1)

	outstruct := new(struct {
		Amount     *big.Int
		RewardDebt *big.Int
	})
	if err != nil {
		return *outstruct, err
	}

	outstruct.Amount = *abi.ConvertType(out[0], new(*big.Int)).(**big.Int)
	outstruct.RewardDebt = *abi.ConvertType(out[1], new(*big.Int)).(**big.Int)

	return *outstruct, err

}

// UserInfo is a free data retrieval call binding the contract method 0x93f1a40b.
//
// Solidity: function userInfo(uint256 , address ) view returns(uint256 amount, uint256 rewardDebt)
func (_FarmingC2N *FarmingC2NSession) UserInfo(arg0 *big.Int, arg1 common.Address) (struct {
	Amount     *big.Int
	RewardDebt *big.Int
}, error) {
	return _FarmingC2N.Contract.UserInfo(&_FarmingC2N.CallOpts, arg0, arg1)
}

// UserInfo is a free data retrieval call binding the contract method 0x93f1a40b.
//
// Solidity: function userInfo(uint256 , address ) view returns(uint256 amount, uint256 rewardDebt)
func (_FarmingC2N *FarmingC2NCallerSession) UserInfo(arg0 *big.Int, arg1 common.Address) (struct {
	Amount     *big.Int
	RewardDebt *big.Int
}, error) {
	return _FarmingC2N.Contract.UserInfo(&_FarmingC2N.CallOpts, arg0, arg1)
}

// Add is a paid mutator transaction binding the contract method 0x1eaaa045.
//
// Solidity: function add(uint256 _allocPoint, address _lpToken, bool _withUpdate) returns()
func (_FarmingC2N *FarmingC2NTransactor) Add(opts *bind.TransactOpts, _allocPoint *big.Int, _lpToken common.Address, _withUpdate bool) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "add", _allocPoint, _lpToken, _withUpdate)
}

// Add is a paid mutator transaction binding the contract method 0x1eaaa045.
//
// Solidity: function add(uint256 _allocPoint, address _lpToken, bool _withUpdate) returns()
func (_FarmingC2N *FarmingC2NSession) Add(_allocPoint *big.Int, _lpToken common.Address, _withUpdate bool) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Add(&_FarmingC2N.TransactOpts, _allocPoint, _lpToken, _withUpdate)
}

// Add is a paid mutator transaction binding the contract method 0x1eaaa045.
//
// Solidity: function add(uint256 _allocPoint, address _lpToken, bool _withUpdate) returns()
func (_FarmingC2N *FarmingC2NTransactorSession) Add(_allocPoint *big.Int, _lpToken common.Address, _withUpdate bool) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Add(&_FarmingC2N.TransactOpts, _allocPoint, _lpToken, _withUpdate)
}

// Deposit is a paid mutator transaction binding the contract method 0xe2bbb158.
//
// Solidity: function deposit(uint256 _pid, uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NTransactor) Deposit(opts *bind.TransactOpts, _pid *big.Int, _amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "deposit", _pid, _amount)
}

// Deposit is a paid mutator transaction binding the contract method 0xe2bbb158.
//
// Solidity: function deposit(uint256 _pid, uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NSession) Deposit(_pid *big.Int, _amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Deposit(&_FarmingC2N.TransactOpts, _pid, _amount)
}

// Deposit is a paid mutator transaction binding the contract method 0xe2bbb158.
//
// Solidity: function deposit(uint256 _pid, uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NTransactorSession) Deposit(_pid *big.Int, _amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Deposit(&_FarmingC2N.TransactOpts, _pid, _amount)
}

// EmergencyWithdraw is a paid mutator transaction binding the contract method 0x5312ea8e.
//
// Solidity: function emergencyWithdraw(uint256 _pid) returns()
func (_FarmingC2N *FarmingC2NTransactor) EmergencyWithdraw(opts *bind.TransactOpts, _pid *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "emergencyWithdraw", _pid)
}

// EmergencyWithdraw is a paid mutator transaction binding the contract method 0x5312ea8e.
//
// Solidity: function emergencyWithdraw(uint256 _pid) returns()
func (_FarmingC2N *FarmingC2NSession) EmergencyWithdraw(_pid *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.EmergencyWithdraw(&_FarmingC2N.TransactOpts, _pid)
}

// EmergencyWithdraw is a paid mutator transaction binding the contract method 0x5312ea8e.
//
// Solidity: function emergencyWithdraw(uint256 _pid) returns()
func (_FarmingC2N *FarmingC2NTransactorSession) EmergencyWithdraw(_pid *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.EmergencyWithdraw(&_FarmingC2N.TransactOpts, _pid)
}

// Fund is a paid mutator transaction binding the contract method 0xca1d209d.
//
// Solidity: function fund(uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NTransactor) Fund(opts *bind.TransactOpts, _amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "fund", _amount)
}

// Fund is a paid mutator transaction binding the contract method 0xca1d209d.
//
// Solidity: function fund(uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NSession) Fund(_amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Fund(&_FarmingC2N.TransactOpts, _amount)
}

// Fund is a paid mutator transaction binding the contract method 0xca1d209d.
//
// Solidity: function fund(uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NTransactorSession) Fund(_amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Fund(&_FarmingC2N.TransactOpts, _amount)
}

// MassUpdatePools is a paid mutator transaction binding the contract method 0x630b5ba1.
//
// Solidity: function massUpdatePools() returns()
func (_FarmingC2N *FarmingC2NTransactor) MassUpdatePools(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "massUpdatePools")
}

// MassUpdatePools is a paid mutator transaction binding the contract method 0x630b5ba1.
//
// Solidity: function massUpdatePools() returns()
func (_FarmingC2N *FarmingC2NSession) MassUpdatePools() (*types.Transaction, error) {
	return _FarmingC2N.Contract.MassUpdatePools(&_FarmingC2N.TransactOpts)
}

// MassUpdatePools is a paid mutator transaction binding the contract method 0x630b5ba1.
//
// Solidity: function massUpdatePools() returns()
func (_FarmingC2N *FarmingC2NTransactorSession) MassUpdatePools() (*types.Transaction, error) {
	return _FarmingC2N.Contract.MassUpdatePools(&_FarmingC2N.TransactOpts)
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_FarmingC2N *FarmingC2NTransactor) RenounceOwnership(opts *bind.TransactOpts) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "renounceOwnership")
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_FarmingC2N *FarmingC2NSession) RenounceOwnership() (*types.Transaction, error) {
	return _FarmingC2N.Contract.RenounceOwnership(&_FarmingC2N.TransactOpts)
}

// RenounceOwnership is a paid mutator transaction binding the contract method 0x715018a6.
//
// Solidity: function renounceOwnership() returns()
func (_FarmingC2N *FarmingC2NTransactorSession) RenounceOwnership() (*types.Transaction, error) {
	return _FarmingC2N.Contract.RenounceOwnership(&_FarmingC2N.TransactOpts)
}

// Set is a paid mutator transaction binding the contract method 0x64482f79.
//
// Solidity: function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate) returns()
func (_FarmingC2N *FarmingC2NTransactor) Set(opts *bind.TransactOpts, _pid *big.Int, _allocPoint *big.Int, _withUpdate bool) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "set", _pid, _allocPoint, _withUpdate)
}

// Set is a paid mutator transaction binding the contract method 0x64482f79.
//
// Solidity: function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate) returns()
func (_FarmingC2N *FarmingC2NSession) Set(_pid *big.Int, _allocPoint *big.Int, _withUpdate bool) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Set(&_FarmingC2N.TransactOpts, _pid, _allocPoint, _withUpdate)
}

// Set is a paid mutator transaction binding the contract method 0x64482f79.
//
// Solidity: function set(uint256 _pid, uint256 _allocPoint, bool _withUpdate) returns()
func (_FarmingC2N *FarmingC2NTransactorSession) Set(_pid *big.Int, _allocPoint *big.Int, _withUpdate bool) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Set(&_FarmingC2N.TransactOpts, _pid, _allocPoint, _withUpdate)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_FarmingC2N *FarmingC2NTransactor) TransferOwnership(opts *bind.TransactOpts, newOwner common.Address) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "transferOwnership", newOwner)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_FarmingC2N *FarmingC2NSession) TransferOwnership(newOwner common.Address) (*types.Transaction, error) {
	return _FarmingC2N.Contract.TransferOwnership(&_FarmingC2N.TransactOpts, newOwner)
}

// TransferOwnership is a paid mutator transaction binding the contract method 0xf2fde38b.
//
// Solidity: function transferOwnership(address newOwner) returns()
func (_FarmingC2N *FarmingC2NTransactorSession) TransferOwnership(newOwner common.Address) (*types.Transaction, error) {
	return _FarmingC2N.Contract.TransferOwnership(&_FarmingC2N.TransactOpts, newOwner)
}

// UpdatePool is a paid mutator transaction binding the contract method 0x51eb05a6.
//
// Solidity: function updatePool(uint256 _pid) returns()
func (_FarmingC2N *FarmingC2NTransactor) UpdatePool(opts *bind.TransactOpts, _pid *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "updatePool", _pid)
}

// UpdatePool is a paid mutator transaction binding the contract method 0x51eb05a6.
//
// Solidity: function updatePool(uint256 _pid) returns()
func (_FarmingC2N *FarmingC2NSession) UpdatePool(_pid *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.UpdatePool(&_FarmingC2N.TransactOpts, _pid)
}

// UpdatePool is a paid mutator transaction binding the contract method 0x51eb05a6.
//
// Solidity: function updatePool(uint256 _pid) returns()
func (_FarmingC2N *FarmingC2NTransactorSession) UpdatePool(_pid *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.UpdatePool(&_FarmingC2N.TransactOpts, _pid)
}

// Withdraw is a paid mutator transaction binding the contract method 0x441a3e70.
//
// Solidity: function withdraw(uint256 _pid, uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NTransactor) Withdraw(opts *bind.TransactOpts, _pid *big.Int, _amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.contract.Transact(opts, "withdraw", _pid, _amount)
}

// Withdraw is a paid mutator transaction binding the contract method 0x441a3e70.
//
// Solidity: function withdraw(uint256 _pid, uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NSession) Withdraw(_pid *big.Int, _amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Withdraw(&_FarmingC2N.TransactOpts, _pid, _amount)
}

// Withdraw is a paid mutator transaction binding the contract method 0x441a3e70.
//
// Solidity: function withdraw(uint256 _pid, uint256 _amount) returns()
func (_FarmingC2N *FarmingC2NTransactorSession) Withdraw(_pid *big.Int, _amount *big.Int) (*types.Transaction, error) {
	return _FarmingC2N.Contract.Withdraw(&_FarmingC2N.TransactOpts, _pid, _amount)
}

// FarmingC2NDepositIterator is returned from FilterDeposit and is used to iterate over the raw logs and unpacked data for Deposit events raised by the FarmingC2N contract.
type FarmingC2NDepositIterator struct {
	Event *FarmingC2NDeposit // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *FarmingC2NDepositIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(FarmingC2NDeposit)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(FarmingC2NDeposit)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *FarmingC2NDepositIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *FarmingC2NDepositIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// FarmingC2NDeposit represents a Deposit event raised by the FarmingC2N contract.
type FarmingC2NDeposit struct {
	User   common.Address
	Pid    *big.Int
	Amount *big.Int
	Raw    types.Log // Blockchain specific contextual infos
}

// FilterDeposit is a free log retrieval operation binding the contract event 0x90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15.
//
// Solidity: event Deposit(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) FilterDeposit(opts *bind.FilterOpts, user []common.Address, pid []*big.Int) (*FarmingC2NDepositIterator, error) {

	var userRule []interface{}
	for _, userItem := range user {
		userRule = append(userRule, userItem)
	}
	var pidRule []interface{}
	for _, pidItem := range pid {
		pidRule = append(pidRule, pidItem)
	}

	logs, sub, err := _FarmingC2N.contract.FilterLogs(opts, "Deposit", userRule, pidRule)
	if err != nil {
		return nil, err
	}
	return &FarmingC2NDepositIterator{contract: _FarmingC2N.contract, event: "Deposit", logs: logs, sub: sub}, nil
}

// WatchDeposit is a free log subscription operation binding the contract event 0x90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15.
//
// Solidity: event Deposit(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) WatchDeposit(opts *bind.WatchOpts, sink chan<- *FarmingC2NDeposit, user []common.Address, pid []*big.Int) (event.Subscription, error) {

	var userRule []interface{}
	for _, userItem := range user {
		userRule = append(userRule, userItem)
	}
	var pidRule []interface{}
	for _, pidItem := range pid {
		pidRule = append(pidRule, pidItem)
	}

	logs, sub, err := _FarmingC2N.contract.WatchLogs(opts, "Deposit", userRule, pidRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(FarmingC2NDeposit)
				if err := _FarmingC2N.contract.UnpackLog(event, "Deposit", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseDeposit is a log parse operation binding the contract event 0x90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15.
//
// Solidity: event Deposit(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) ParseDeposit(log types.Log) (*FarmingC2NDeposit, error) {
	event := new(FarmingC2NDeposit)
	if err := _FarmingC2N.contract.UnpackLog(event, "Deposit", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// FarmingC2NEmergencyWithdrawIterator is returned from FilterEmergencyWithdraw and is used to iterate over the raw logs and unpacked data for EmergencyWithdraw events raised by the FarmingC2N contract.
type FarmingC2NEmergencyWithdrawIterator struct {
	Event *FarmingC2NEmergencyWithdraw // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *FarmingC2NEmergencyWithdrawIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(FarmingC2NEmergencyWithdraw)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(FarmingC2NEmergencyWithdraw)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *FarmingC2NEmergencyWithdrawIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *FarmingC2NEmergencyWithdrawIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// FarmingC2NEmergencyWithdraw represents a EmergencyWithdraw event raised by the FarmingC2N contract.
type FarmingC2NEmergencyWithdraw struct {
	User   common.Address
	Pid    *big.Int
	Amount *big.Int
	Raw    types.Log // Blockchain specific contextual infos
}

// FilterEmergencyWithdraw is a free log retrieval operation binding the contract event 0xbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae0595.
//
// Solidity: event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) FilterEmergencyWithdraw(opts *bind.FilterOpts, user []common.Address, pid []*big.Int) (*FarmingC2NEmergencyWithdrawIterator, error) {

	var userRule []interface{}
	for _, userItem := range user {
		userRule = append(userRule, userItem)
	}
	var pidRule []interface{}
	for _, pidItem := range pid {
		pidRule = append(pidRule, pidItem)
	}

	logs, sub, err := _FarmingC2N.contract.FilterLogs(opts, "EmergencyWithdraw", userRule, pidRule)
	if err != nil {
		return nil, err
	}
	return &FarmingC2NEmergencyWithdrawIterator{contract: _FarmingC2N.contract, event: "EmergencyWithdraw", logs: logs, sub: sub}, nil
}

// WatchEmergencyWithdraw is a free log subscription operation binding the contract event 0xbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae0595.
//
// Solidity: event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) WatchEmergencyWithdraw(opts *bind.WatchOpts, sink chan<- *FarmingC2NEmergencyWithdraw, user []common.Address, pid []*big.Int) (event.Subscription, error) {

	var userRule []interface{}
	for _, userItem := range user {
		userRule = append(userRule, userItem)
	}
	var pidRule []interface{}
	for _, pidItem := range pid {
		pidRule = append(pidRule, pidItem)
	}

	logs, sub, err := _FarmingC2N.contract.WatchLogs(opts, "EmergencyWithdraw", userRule, pidRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(FarmingC2NEmergencyWithdraw)
				if err := _FarmingC2N.contract.UnpackLog(event, "EmergencyWithdraw", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseEmergencyWithdraw is a log parse operation binding the contract event 0xbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae0595.
//
// Solidity: event EmergencyWithdraw(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) ParseEmergencyWithdraw(log types.Log) (*FarmingC2NEmergencyWithdraw, error) {
	event := new(FarmingC2NEmergencyWithdraw)
	if err := _FarmingC2N.contract.UnpackLog(event, "EmergencyWithdraw", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// FarmingC2NOwnershipTransferredIterator is returned from FilterOwnershipTransferred and is used to iterate over the raw logs and unpacked data for OwnershipTransferred events raised by the FarmingC2N contract.
type FarmingC2NOwnershipTransferredIterator struct {
	Event *FarmingC2NOwnershipTransferred // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *FarmingC2NOwnershipTransferredIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(FarmingC2NOwnershipTransferred)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(FarmingC2NOwnershipTransferred)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *FarmingC2NOwnershipTransferredIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *FarmingC2NOwnershipTransferredIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// FarmingC2NOwnershipTransferred represents a OwnershipTransferred event raised by the FarmingC2N contract.
type FarmingC2NOwnershipTransferred struct {
	PreviousOwner common.Address
	NewOwner      common.Address
	Raw           types.Log // Blockchain specific contextual infos
}

// FilterOwnershipTransferred is a free log retrieval operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_FarmingC2N *FarmingC2NFilterer) FilterOwnershipTransferred(opts *bind.FilterOpts, previousOwner []common.Address, newOwner []common.Address) (*FarmingC2NOwnershipTransferredIterator, error) {

	var previousOwnerRule []interface{}
	for _, previousOwnerItem := range previousOwner {
		previousOwnerRule = append(previousOwnerRule, previousOwnerItem)
	}
	var newOwnerRule []interface{}
	for _, newOwnerItem := range newOwner {
		newOwnerRule = append(newOwnerRule, newOwnerItem)
	}

	logs, sub, err := _FarmingC2N.contract.FilterLogs(opts, "OwnershipTransferred", previousOwnerRule, newOwnerRule)
	if err != nil {
		return nil, err
	}
	return &FarmingC2NOwnershipTransferredIterator{contract: _FarmingC2N.contract, event: "OwnershipTransferred", logs: logs, sub: sub}, nil
}

// WatchOwnershipTransferred is a free log subscription operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_FarmingC2N *FarmingC2NFilterer) WatchOwnershipTransferred(opts *bind.WatchOpts, sink chan<- *FarmingC2NOwnershipTransferred, previousOwner []common.Address, newOwner []common.Address) (event.Subscription, error) {

	var previousOwnerRule []interface{}
	for _, previousOwnerItem := range previousOwner {
		previousOwnerRule = append(previousOwnerRule, previousOwnerItem)
	}
	var newOwnerRule []interface{}
	for _, newOwnerItem := range newOwner {
		newOwnerRule = append(newOwnerRule, newOwnerItem)
	}

	logs, sub, err := _FarmingC2N.contract.WatchLogs(opts, "OwnershipTransferred", previousOwnerRule, newOwnerRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(FarmingC2NOwnershipTransferred)
				if err := _FarmingC2N.contract.UnpackLog(event, "OwnershipTransferred", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseOwnershipTransferred is a log parse operation binding the contract event 0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0.
//
// Solidity: event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
func (_FarmingC2N *FarmingC2NFilterer) ParseOwnershipTransferred(log types.Log) (*FarmingC2NOwnershipTransferred, error) {
	event := new(FarmingC2NOwnershipTransferred)
	if err := _FarmingC2N.contract.UnpackLog(event, "OwnershipTransferred", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}

// FarmingC2NWithdrawIterator is returned from FilterWithdraw and is used to iterate over the raw logs and unpacked data for Withdraw events raised by the FarmingC2N contract.
type FarmingC2NWithdrawIterator struct {
	Event *FarmingC2NWithdraw // Event containing the contract specifics and raw log

	contract *bind.BoundContract // Generic contract to use for unpacking event data
	event    string              // Event name to use for unpacking event data

	logs chan types.Log        // Log channel receiving the found contract events
	sub  ethereum.Subscription // Subscription for errors, completion and termination
	done bool                  // Whether the subscription completed delivering logs
	fail error                 // Occurred error to stop iteration
}

// Next advances the iterator to the subsequent event, returning whether there
// are any more events found. In case of a retrieval or parsing error, false is
// returned and Error() can be queried for the exact failure.
func (it *FarmingC2NWithdrawIterator) Next() bool {
	// If the iterator failed, stop iterating
	if it.fail != nil {
		return false
	}
	// If the iterator completed, deliver directly whatever's available
	if it.done {
		select {
		case log := <-it.logs:
			it.Event = new(FarmingC2NWithdraw)
			if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
				it.fail = err
				return false
			}
			it.Event.Raw = log
			return true

		default:
			return false
		}
	}
	// Iterator still in progress, wait for either a data or an error event
	select {
	case log := <-it.logs:
		it.Event = new(FarmingC2NWithdraw)
		if err := it.contract.UnpackLog(it.Event, it.event, log); err != nil {
			it.fail = err
			return false
		}
		it.Event.Raw = log
		return true

	case err := <-it.sub.Err():
		it.done = true
		it.fail = err
		return it.Next()
	}
}

// Error returns any retrieval or parsing error occurred during filtering.
func (it *FarmingC2NWithdrawIterator) Error() error {
	return it.fail
}

// Close terminates the iteration process, releasing any pending underlying
// resources.
func (it *FarmingC2NWithdrawIterator) Close() error {
	it.sub.Unsubscribe()
	return nil
}

// FarmingC2NWithdraw represents a Withdraw event raised by the FarmingC2N contract.
type FarmingC2NWithdraw struct {
	User   common.Address
	Pid    *big.Int
	Amount *big.Int
	Raw    types.Log // Blockchain specific contextual infos
}

// FilterWithdraw is a free log retrieval operation binding the contract event 0xf279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568.
//
// Solidity: event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) FilterWithdraw(opts *bind.FilterOpts, user []common.Address, pid []*big.Int) (*FarmingC2NWithdrawIterator, error) {

	var userRule []interface{}
	for _, userItem := range user {
		userRule = append(userRule, userItem)
	}
	var pidRule []interface{}
	for _, pidItem := range pid {
		pidRule = append(pidRule, pidItem)
	}

	logs, sub, err := _FarmingC2N.contract.FilterLogs(opts, "Withdraw", userRule, pidRule)
	if err != nil {
		return nil, err
	}
	return &FarmingC2NWithdrawIterator{contract: _FarmingC2N.contract, event: "Withdraw", logs: logs, sub: sub}, nil
}

// WatchWithdraw is a free log subscription operation binding the contract event 0xf279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568.
//
// Solidity: event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) WatchWithdraw(opts *bind.WatchOpts, sink chan<- *FarmingC2NWithdraw, user []common.Address, pid []*big.Int) (event.Subscription, error) {

	var userRule []interface{}
	for _, userItem := range user {
		userRule = append(userRule, userItem)
	}
	var pidRule []interface{}
	for _, pidItem := range pid {
		pidRule = append(pidRule, pidItem)
	}

	logs, sub, err := _FarmingC2N.contract.WatchLogs(opts, "Withdraw", userRule, pidRule)
	if err != nil {
		return nil, err
	}
	return event.NewSubscription(func(quit <-chan struct{}) error {
		defer sub.Unsubscribe()
		for {
			select {
			case log := <-logs:
				// New log arrived, parse the event and forward to the user
				event := new(FarmingC2NWithdraw)
				if err := _FarmingC2N.contract.UnpackLog(event, "Withdraw", log); err != nil {
					return err
				}
				event.Raw = log

				select {
				case sink <- event:
				case err := <-sub.Err():
					return err
				case <-quit:
					return nil
				}
			case err := <-sub.Err():
				return err
			case <-quit:
				return nil
			}
		}
	}), nil
}

// ParseWithdraw is a log parse operation binding the contract event 0xf279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568.
//
// Solidity: event Withdraw(address indexed user, uint256 indexed pid, uint256 amount)
func (_FarmingC2N *FarmingC2NFilterer) ParseWithdraw(log types.Log) (*FarmingC2NWithdraw, error) {
	event := new(FarmingC2NWithdraw)
	if err := _FarmingC2N.contract.UnpackLog(event, "Withdraw", log); err != nil {
		return nil, err
	}
	event.Raw = log
	return event, nil
}
