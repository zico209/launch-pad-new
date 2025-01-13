package middlewares

import (
	requestModel "c2n-be/models/request"
	"encoding/hex"
	"fmt"
	jwt "github.com/appleboy/gin-jwt/v2"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/gin-gonic/gin"
	"log"
	"strings"
	"time"
)

var JwtAuthMiddleware *jwt.GinJWTMiddleware

func InitJwt() {
	authMiddleware, err := jwt.New(initParams())
	if err != nil {
		log.Fatal("JWT Error:" + err.Error())
	}
	JwtAuthMiddleware = authMiddleware
}

func GetJwtMiddleware() gin.HandlerFunc {
	return func(context *gin.Context) {
		errInit := JwtAuthMiddleware.MiddlewareInit()
		if errInit != nil {
			log.Fatal("authMiddleware.MiddlewareInit() Error:" + errInit.Error())
		}
	}
}

func initParams() *jwt.GinJWTMiddleware {

	return &jwt.GinJWTMiddleware{
		Realm:       "test zone",
		Key:         []byte("secret key"),
		Timeout:     time.Hour,
		MaxRefresh:  time.Hour,
		PayloadFunc: payloadFunc(),

		IdentityHandler: IdentityHandler(),
		Authenticator:   authenticator(),
		Authorizator:    authorizator(),
		Unauthorized:    unauthorized(),
		TokenLookup:     "header: Authorization, query: token, cookie: jwt",
		// TokenLookup: "query:token",
		// TokenLookup: "cookie:token",
		TokenHeadName: "Bearer",
		TimeFunc:      time.Now,
	}
}

func authorizator() func(data interface{}, c *gin.Context) bool {
	return func(data interface{}, c *gin.Context) bool {
		return true
	}
}

func payloadFunc() func(data interface{}) jwt.MapClaims {
	return func(data interface{}) jwt.MapClaims {
		if v, ok := data.(string); ok {
			return jwt.MapClaims{
				"identity": v,
			}
		}
		return jwt.MapClaims{}
	}
}

func authenticator() func(c *gin.Context) (interface{}, error) {
	return func(c *gin.Context) (interface{}, error) {
		var request requestModel.GetTokenRequest
		if err := c.ShouldBind(&request); err != nil {
			return "", jwt.ErrMissingLoginValues
		}
		signature, err := hex.DecodeString(strings.TrimPrefix(request.Signature, "0x"))

		hash := crypto.Keccak256Hash([]byte("hello"))

		sigPublicKeyECDSA, err := crypto.SigToPub(hash.Bytes(), signature)
		if err != nil {
			log.Fatal(err)
		}

		recoveredAddress := crypto.PubkeyToAddress(*sigPublicKeyECDSA).Hex()
		valid := strings.ToLower(recoveredAddress) == strings.ToLower(request.Address)
		fmt.Println(valid) // true

		return request.Address, nil
	}
}

func IdentityHandler() func(c *gin.Context) interface{} {
	return func(c *gin.Context) interface{} {
		claims := jwt.ExtractClaims(c)
		return claims["identity"].(string)
	}
}
func unauthorized() func(c *gin.Context, code int, message string) {
	return func(c *gin.Context, code int, message string) {
		c.JSON(code, gin.H{
			"code":    code,
			"message": message,
		})
	}
}
