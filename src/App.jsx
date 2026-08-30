import React from 'react'
import Dashboard from './Componenets/Outlet/Dahsboard'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Dashboard/>
      </BrowserRouter>
    </div>
  )
}

export default App