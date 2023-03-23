const useToken = () => {
  const TokenKey = "NO_A"
  const getToken = () => {
    return sessionStorage.getItem(TokenKey)
  }
  const setToken = (token : string) => {
    sessionStorage.setItem(TokenKey, token)
  }

  return {
    getToken,
    setToken
  }
}

export default useToken