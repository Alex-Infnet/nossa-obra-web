import Access from "../layouts/Access";
import SignIn from "../pages/SignIn";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound404 from "../pages/shared/NotFound404";
import Private from "../pages/Private";
import PrivateRouter from "../pages/shared/PrivateRouter";
  
const router = createBrowserRouter([
  {
    errorElement: <NotFound404 />
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
  },
  {
    element: <PrivateRouter />,
    children: [
      {
        path: '',
        element: <Private />
      }
    ]
  }
])

export default router