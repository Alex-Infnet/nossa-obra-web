import { BrowserRouter, Route, Routes } from "react-router-dom"
import Access from "../layouts/Access"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import ForgotPassword from "../pages/ForgotPassword"

const RouteComponents = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user2" element={<Access />}>
          <Route path="signin2" element={<SignIn />}/>
          <Route path="signup2" element={<SignUp />}/>
          <Route path="forgot2" element={<ForgotPassword />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteComponents