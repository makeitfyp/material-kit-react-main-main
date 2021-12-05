import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Profile';
import UserList from './pages/UserList';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Recipe from './pages/Recipe';
import Register from './pages/Register';
import Settings from './pages/Settings';
import DashBoard from './pages/Dashboard';

const routes = [
  {
    path: '/app',
    element: <DashboardLayout />,
    children: [
      { path: 'profile', element: <Account /> },
      { path: 'users', element: <UserList /> },
      { path: 'recipes', element: <Recipe /> },
      { path: 'settings', element: <Settings /> },
      { path: 'dashboard', element: <DashBoard /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
