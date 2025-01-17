package services

import (
	"github.com/ethereum/go-ethereum/ethclient"
	"log"
)

var GEthClient *ethclient.Client

func InitEthClient() {
	client, err := ethclient.Dial("http://localhost:8888")
	if err != nil {
		log.Fatal(err)
	}
	GEthClient = client
}
