import {Access} from "../layouts";
import { createBrowserRouter } from "react-router-dom";
import {SignUp, SignIn, ForgotPassword} from "../pages/access";
import {NotFound404, PrivateRouter} from "../pages/shared";
import { Buildings, CreateBuilding } from "../pages/home";
import Home from "../layouts/Home";
import ActivitiesBuilding from "../pages/home/ActivitiesBuilding";
  
export default createBrowserRouter([
  {
    errorElement: <NotFound404 />
  },
  {
    path: "",
    element: <PrivateRouter />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Buildings />
          },
          {
            path: "/orcamento/:id",
            element: <ActivitiesBuilding />
          },
          {
            path: "/orcamento/:id/new",
            element: <CreateBuilding />
          }
        ]
      }
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