import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "sonner";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
    <Toaster position='top-right' richColors/>
  </StrictMode>
)