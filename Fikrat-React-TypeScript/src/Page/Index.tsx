import Login from "./Login";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Login />
    </StrictMode>,
  )
  