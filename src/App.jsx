import React from 'react'
import Dashboard from './Componenets/Outlet/Dahsboard'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Doctors from './Componenets/Doctors/Doctors'
import AddDoctors from './Componenets/Doctors/AddDoctors'
const App = () => {
  return (
    <div>
      <BrowserRouter>
          {/* <Dashboard/> */}
          <Doctors/>
          <AddDoctors/>
      </BrowserRouter>
    </div>
  )
}

export default App