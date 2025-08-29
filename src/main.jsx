import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'aos/dist/aos.css';
import App from './App.jsx'
import { RouterProvider} from "react-router";
import { router } from './Router/Router.jsx';
import AOS from 'aos';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';


AOS.init({
      once: false
    });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
     <div className='poppins'>
      <RouterProvider router={router} />
     </div>
  </StrictMode>,
)
