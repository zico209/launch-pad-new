// 定义 keyMap 对象的类型
const keyMap: Record<string, string> = {
  'auto_connect_wallet': 'bobabrewery_' + process.env.NODE_ENV + '_0.1_' + 'auto_connect_wallet',
}

// keyMapper 函数的类型注解
const keyMapper = (key: string): string => {
  return 'bobabrewery_' + process.env.NODE_ENV + '_0.1_' + key
}

// useLocalStorage 函数
export function useLocalStorage() {
  // getLocal 函数的类型注解
  function getLocal(key: string): string | null {
    // 如果 keyMap 中找不到对应的 key，就使用 keyMapper
    return window.localStorage.getItem(keyMap[key] || keyMapper(key));
  }

  // setLocal 函数的类型注解
  function setLocal(key: string, value: string): void {
    // 如果 keyMap 中找不到对应的 key，就使用 keyMapper
    window.localStorage.setItem(keyMap[key] || keyMapper(key), value);
  }

  return {
    getLocal,
    setLocal,
  }
}
