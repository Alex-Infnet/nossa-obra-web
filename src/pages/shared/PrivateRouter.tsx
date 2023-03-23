import { Navigate, Outlet } from "react-router-dom"
import useToken from "../../hooks/useToken"

const PrivateRouter = () => {
  const {getToken, setToken} = useToken()
  const token = getToken()

  return (token !== null) ? <Outlet /> : <Navigate to="/user/signin" />
}

export default PrivateRouter