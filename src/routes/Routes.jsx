import { createBrowserRouter } from 'react-router-dom'
import DashBoard from '../layouts/DashBoard'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Home from '../pages/Home/Home'
import ManageUsers from '../components/Dashboard/Admin/ManageUsers'
import AdminDashboard from '../components/Dashboard/Admin/AdminDashboard'
import AllTransactions from '../components/Dashboard/Admin/AllTransactions'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/adminDashboard',
        element: <AdminDashboard />
      },
      {
        path: '/manageUsers',
        element: <ManageUsers />
      },
      {
        path: '/allTransactions',
        element: <AllTransactions />
      },
    ],
  },


])
