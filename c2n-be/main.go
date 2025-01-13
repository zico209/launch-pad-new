package main

import (
	"c2n-be/Initialize"
	_ "c2n-be/docs"
)

//  @title			Swagger Example API
//	@version		1.0
//	@description	This is a sample server celler server.

//	@host		localhost:8080
//	@BasePath	/api/v1

//	@securityDefinitions.basic	BasicAuth

// @securityDefinitions.apikey	ApiKeyAuth
// @in							header
// @name						Authorization
// @description				Description for what is this security definition being used
func main() {
	Initialize.InitRouter()
}
