import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homelayout from './layout/Homelayout.jsx';
import Pages from './components/Pages.jsx';
import AuthLayOut from './layout/AuthLayOut.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homelayout />,
    children:[
      {
        path:"",
        element:<Navigate to={"/category/01"}></Navigate>
      },
      {
        path:'/category/:id',
        element:<Pages />,
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      }
    ]
  },
  {
    path:'auth',
    element:<AuthLayOut />,
    children:[
      {
        path:'/auth/login',
        element:<Login />
      },
      {
        path:'/auth/register',
        element:<Registration />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
