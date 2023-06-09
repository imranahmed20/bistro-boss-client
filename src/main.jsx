import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Share/Home/Home/Home.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Order from './Pages/Order/Order.jsx';
import Login from './Pages/Login/Login.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import PrivetRoute from './Routes/PrivetRoute.jsx';
import {
  QueryClient,
  QueryClientProvider

} from '@tanstack/react-query'
import DashBoard from './Layout/DashBord/DashBord.jsx';
import MyCard from './Layout/DashBord/MyCard/MyCard.jsx';
import Error from './Pages/Error/Error.jsx';
import AllUser from './Layout/DashBord/AllUser/AllUser.jsx';
import AllItem from './Layout/DashBord/AllItem/AllItem.jsx';
import Payment from './Layout/DashBord/Payment/Payment.jsx';
import UserHome from './Layout/DashBord/UserHome/UserHome.jsx';
import AdminHome from './Layout/DashBord/AdminHome/AdminHome.jsx';
import AdminRoute from './Routes/AdminRoute/AdminRoute.jsx';


const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <PrivetRoute><Menu></Menu></PrivetRoute>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
    children: [
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>

      },
      {
        path: 'myCart',
        element: <MyCard></MyCard>
      },
      {
        path: 'allUser',
        element: <AllUser></AllUser>
      },
      {
        path: 'allItem',
        element: <AllItem></AllItem>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router}></RouterProvider>
          </div>
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
