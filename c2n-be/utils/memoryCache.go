package utils

import (
	"sync"
	"time"
)

type cacheItem struct {
	value      interface{}
	expiration int64
}

type MemoryCache struct {
	data sync.Map
}

var GlobalCache *MemoryCache

func MemoryCacheInit() {
	GlobalCache = &MemoryCache{}
}

// Set 设置缓存
func (mc *MemoryCache) Set(key string, value interface{}, duration time.Duration) {
	expiration := time.Now().Add(duration).UnixNano()
	mc.data.Store(key, cacheItem{value: value, expiration: expiration})
}

// Get 获取缓存
func (mc *MemoryCache) Get(key string) (interface{}, bool) {
	item, found := GlobalCache.data.Load(key)
	if !found {
		return nil, false
	}
	cacheItem := item.(cacheItem)
	if time.Now().UnixNano() > cacheItem.expiration {
		mc.data.Delete(key) // 过期删除
		return nil, false
	}
	return cacheItem.value, true
}

// Delete 删除缓存
func (mc *MemoryCache) Delete(key string) {
	mc.data.Delete(key)
}

// Flush 清空所有缓存
func (mc *MemoryCache) Flush() {
	mc.data.Range(func(key, value interface{}) bool {
		mc.data.Delete(key)
		return true
	})
}
