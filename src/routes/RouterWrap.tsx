import { Navigate, RouteObject, useLocation, useRoutes } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { recruiterRoutes } from './recruiter';
import { clientRoutes } from './client';
import MainPage from '../pages/MainPage';
import WelcomePage from '../pages/WelcomePage';
import ClientJobsList from '../pages/ClientJobsList';

export function RootRouterWrap() {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const routes: RouteObject[] = [
    {
      path: '/',
      element: isLoggedIn ? (
        <MainPage />
      ) : (
        <Navigate to="/welcome" state={{ redirectedFrom: location.pathname }} />
      ),
      children: [{ path: '/', element: <MainPage /> }, ...recruiterRoutes, ...clientRoutes],
    },
    {
      path: '/welcome',
      element: <WelcomePage />,
    },
    {
      path: '/jobs',
      element: <ClientJobsList />,
    },
  ];
  return <>{useRoutes(routes)}</>;
}
