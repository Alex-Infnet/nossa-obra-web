import { ReactNode, createContext } from "react";

type ApiContextType = {
  get : Function
  post : Function
}

export const ApiContext = createContext<ApiContextType>({
  get : () => {},
  post : () => {}
})

type ApiProviderType = {
  children : ReactNode
}

const ApiProvider = ({children} : ApiProviderType) => {

  const headers = new Headers()
  headers.append("Content-Type", "application/json")

  const get = (url : string) => {
    return fetch(url)
  }
  const post = (url : string, body : object) => {
    return fetch(url, {
      method : 'POST',
      headers : headers,
      body : JSON.stringify(body)
    })
  }

  return (
    <ApiContext.Provider value={{get, post}}>
      {children}
    </ApiContext.Provider>
  )
  
}

export default ApiProvider