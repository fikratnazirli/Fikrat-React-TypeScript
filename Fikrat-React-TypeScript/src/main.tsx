import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from "./Page/Index.tsx";
import Login from "./Page/Login.tsx";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Index />
    <Login />
  </StrictMode>,
)
