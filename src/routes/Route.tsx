import Access from "../layout/Access";
import SignIn from "../pages/SignIn";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
  
const router = createBrowserRouter([
  {
    element: <Access />,
    path: 'user',
    children: [
      {
        element: <SignIn />,
        path: 'signin'
      },{
        element: <SignUp />,
        path: 'signup'
      },{
        element: <ForgotPassword />,
        path: 'forgotpassword'
      }
    ]
  },
])

export default router