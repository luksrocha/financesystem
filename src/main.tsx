import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globalStyle.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes.tsx';
import { CryptoProvider } from './context/CryptoContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CryptoProvider>
            <RouterProvider router={router} />
        </CryptoProvider>
    </React.StrictMode>
);
