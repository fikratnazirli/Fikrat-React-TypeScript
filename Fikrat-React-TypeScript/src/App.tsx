import React from 'react'
import Index from "./Page/Index.tsx";
import Login from "./Page/Login.tsx";
import Home from './Page/Home.tsx';
type Props = {}

const App = (props: Props) => {
  return (
    <div>
    <Index />
    <Login />
    <Home />
    </div>
  )
}

export default App