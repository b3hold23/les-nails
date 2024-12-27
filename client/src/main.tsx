import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx';
import HomePage from './pages/HomePage.tsx';
import Gallery from './pages/Gallery.tsx';
import BookPage from './pages/BookPage.tsx';

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
            {
                path: '/gallery',
                element: <Gallery  />,
            },
            {
                path: '/bookPage',
                element: <BookPage />,
            },
        ],
    },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<RouterProvider router={router}/>);
}