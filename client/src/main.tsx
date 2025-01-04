import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ]
    },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <RouterProvider router={router} />
    );
}

