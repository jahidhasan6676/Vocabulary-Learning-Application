import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import router from './Router/Router';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './AuthProvider/AuthProvider';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer/>
    </AuthProvider>
  </StrictMode>,
)
