package controller

import (
	"c2n-be/middlewares"
	requestModel "c2n-be/models/request"
	"github.com/gin-gonic/gin"
	"net/http"
)

// GetToken godoc
//
//		@Summary
//		@Description
//		@Tags			auth
//		@Accept			json
//		@Produce		json
//	 	@Param			GetToken	body		requestModel.GetTokenRequest	true	"Add account"
//		@Success		200	{object} string
//		@Router			/auth/token [post]
func (c *Controller) GetToken(ctx *gin.Context) {
	user, err := middlewares.JwtAuthMiddleware.Authenticator(ctx)
	if err != nil {
		ctx.JSON(401, gin.H{"error": "authentication failed"})
		return
	}
	// 生成 token
	token, _, err := middlewares.JwtAuthMiddleware.TokenGenerator(user)
	if err != nil {
		ctx.JSON(500, gin.H{"error": "failed to generate token"})
		return
	}

	var request requestModel.GetTokenRequest
	if err := ctx.ShouldBind(&request); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
	ctx.JSON(http.StatusOK, token)
}
