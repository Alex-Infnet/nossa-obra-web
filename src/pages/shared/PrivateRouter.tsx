import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/user/signin" />
}

export default PrivateRouter