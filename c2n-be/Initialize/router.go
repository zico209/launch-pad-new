package Initialize

import (
	"c2n-be/controller"
	"c2n-be/middlewares"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

func InitRouter() {
	engine := gin.Default()
	engine.Use(middlewares.CORSMiddleware())
	middlewares.InitJwt()
	engine.Use(middlewares.GetJwtMiddleware())

	c := controller.NewController()

	v1 := engine.Group("/api/v1")
	{
		auth := v1.Group("/auth")
		{
			auth.POST("token", c.GetToken)
		}
	}
	engine.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	engine.Run(":8080")
}
