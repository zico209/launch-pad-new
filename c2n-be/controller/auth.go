package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

// GetToken godoc
//
//	@Summary
//	@Description
//	@Tags			accounts
//	@Accept			json
//	@Produce		json
//	@Param			id	path		int	true	"Account ID"
//	@Success		200	{object}	requestModel.GetTokenRequest
//	@Router			/auth/token/{signedMsg}/{msg} [get]
func (c *Controller) GetToken(ctx *gin.Context) {
	sigedMsg := ctx.Param("sigedMsg")
	msg := ctx.Param("msg")

	token := sigedMsg + msg
	ctx.JSON(http.StatusOK, token)
}
