import { createBrowserRouter } from 'react-router-dom'
import DashBoard from '../layouts/DashBoard'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Home from '../pages/Home/Home'
import ManageUsers from '../components/Dashboard/Admin/ManageUsers'
import AdminDashboard from '../components/Dashboard/Admin/AdminDashboard'
import AllTransactions from '../components/Dashboard/Admin/AllTransactions'
import AgentDashboard from '../components/Dashboard/Agent/AgentDashboard'
import AgentCashOutRequest from '../components/Dashboard/Agent/AgentCashOutRequest'
import AgentBalanceInquiry from '../components/Dashboard/Agent/AgentBalanceInquiry'
import AgentCashInRequest from '../components/Dashboard/Agent/AgentCashInRequest'
import AgentTransactionsHistory from '../components/Dashboard/Agent/AgentTransactionsHistory'
import UserDashboard from '../components/Dashboard/User/UserDashboard'
import UserCashInRequest from '../components/Dashboard/User/userCashInRequest'
import UserCashOutRequest from '../components/Dashboard/User/userCashOutRequest'
import UserBalanceInquiry from '../components/Dashboard/User/UserBalanceInquiry'
import UserTransactionsHistory from '../components/Dashboard/User/userTransactionsHistory'

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
      // ---------------------------------------
      {
        path: '/agentDashboard',
        element: <AgentDashboard />
      },
      {
        path: '/agentCashInRequest',
        element: <AgentCashInRequest />
      },
      {
        path: '/agentCashOutRequest',
        element: <AgentCashOutRequest />
      },
      {
        path: '/agentBalanceInRequest',
        element: <AgentBalanceInquiry />
      },
      {
        path: '/AgentTransactionsHistory',
        element: <AgentTransactionsHistory />
      },
      // ---------------------------------------
      {
        path: '/userDashboard',
        element: <UserDashboard />
      },
      {
        path: '/userCashInRequest',
        element: <UserCashInRequest />
      },
      {
        path: '/userCashOutRequest',
        element: <UserCashOutRequest />
      },
      {
        path: '/userBalanceInquiry',
        element: <UserBalanceInquiry />
      },
      {
        path: '/userTransactionsHistory',
        element: <UserTransactionsHistory />
      },
    ],
  },


])
