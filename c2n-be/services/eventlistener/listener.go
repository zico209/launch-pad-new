package eventlistener

import (
	"c2n-be/contract/farmingC2N"
	"encoding/json"
	"fmt"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"log"
	"math/big"
)

func ListenDeposit() {
	client, err := ethclient.Dial("ws://localhost:8545")
	if err != nil {
		log.Fatalf("Failed to connect to Ethereum node: %v", err)
	}

	farmingC2NFilterer, err := farmingC2N.NewFarmingC2NFilterer(common.HexToAddress("0x990F30D605Bc4E226bC832C47Cb59fc5a2C424Db"), client)
	if err != nil {
		log.Fatalf("Failed to create Farming C2 Filterer: %v", err)
	}

	logs := make(chan *farmingC2N.FarmingC2NDeposit)
	bigInts := []big.Int{*big.NewInt(0)}
	var bigIntPtrs []*big.Int

	for i := range bigInts {
		bigIntPtrs = append(bigIntPtrs, &bigInts[i])
	}
	deposit, err := farmingC2NFilterer.WatchDeposit(nil, logs, []common.Address{common.HexToAddress("0x990F30D605Bc4E226bC832C47Cb59fc5a2C424Db")}, bigIntPtrs)
	if err != nil {
		log.Fatalf("Failed to WatchDeposit: %v", err)
	}
	defer deposit.Unsubscribe()

	for {
		select {
		case log1 := <-logs:
			jsonData, err1 := json.Marshal(log1.Raw)
			if err1 != nil {
				fmt.Printf(err1.Error())
			}
			fmt.Printf(string(jsonData))
		}
	}
}
