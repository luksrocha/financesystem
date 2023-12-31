import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Dashboard } from '../pages/dashboard/Dashboard';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
]);
