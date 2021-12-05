import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Profile';
import UserList from './pages/UserList';
import NotFound from './pages/NotFound';
import Recipe from './pages/Recipe';
import Settings from './pages/Settings';
import DashBoard from './pages/Dashboard';
import AddRecipe from './components/recipes/AddRecipe';

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
      { path: 'addrecipe', element: <AddRecipe /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
