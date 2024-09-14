import { Navigate, RouteObject, useLocation, useRoutes } from 'react-router-dom';
import { useAuth } from 'store/auth';
import WelcomePage from 'pages/WelcomePage';
import ClientJobsList from 'pages/ClientJobsList';
import JobPost from 'pages/JobPost';
import Dashboard from 'pages/Dashboard';
import ApplyPage from 'pages/ApplyPage';

export function RootRouterWrap() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <WelcomePage />,
    },
    {
      path: '/welcome',
      element: <WelcomePage />,
    },
    {
      path: '/jobs',
      element: <ClientJobsList />,
    },
    {
      path: '/post-job',
      element: <JobPost />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/apply/:id',
      element: <ApplyPage />,
    },
  ];
  return <>{useRoutes(routes)}</>;
}
