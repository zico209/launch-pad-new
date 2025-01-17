package middlewares

import (
	requestModel "c2n-be/models/request"
	"fmt"
	jwt "github.com/appleboy/gin-jwt/v2"
	"github.com/ethereum/go-ethereum/accounts"
	"github.com/ethereum/go-ethereum/common/hexutil"
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
		Realm:           "test zone",
		Key:             []byte("secret key"),
		Timeout:         time.Hour,
		MaxRefresh:      time.Hour,
		PayloadFunc:     payloadFunc(),
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
		// 1. 将消息转换为标准格式（以太坊签名格式）
		prefixedMessage := accounts.TextHash([]byte("hello"))

		// 2. 从16进制字符串中解码签名
		signatureBytes, err := hexutil.Decode(request.Signature)
		if err != nil {
			return false, fmt.Errorf("无效的签名格式: %v", err)
		}

		// 签名的最后一个字节是 v 值，需要调整为标准的 27 或 28
		if len(signatureBytes) != 65 {
			return false, fmt.Errorf("签名长度错误")
		}
		signatureBytes[64] -= 27 // 将 v 值调整为 {0, 1} 范围

		// 3. 使用 SigToPub 从签名中恢复公钥
		sigPublicKeyECDSA, err := crypto.SigToPub(prefixedMessage, signatureBytes)
		if err != nil {
			return false, fmt.Errorf("解析公钥失败: %v", err)
		}

		// 4. 从公钥计算以太坊地址
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
