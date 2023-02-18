import {Access} from "../layouts";
import { createBrowserRouter } from "react-router-dom";
import {SignUp, SignIn, ForgotPassword} from "../pages/access";
import {NotFound404, PrivateRouter} from "../pages/shared";
  
export default createBrowserRouter([
  {
    errorElement: <NotFound404 />
  },
  {
    element: <PrivateRouter />,
    children: [
    ]
  },
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
  }
])