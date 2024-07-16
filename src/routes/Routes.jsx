import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import DashBoard from '../layouts/DashBoard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <DashBoard />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])
