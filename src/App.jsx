import React from 'react'
import Dashboard from './Componenets/Outlet/Dahsboard'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Doctors from './Componenets/Doctors/Doctors'
import AddDoctors from './Componenets/Doctors/AddDoctors'
import Routing from './Routing'
import Header from './Componenets/Outlet/Header'
const App = () => {
  return (
    <div>
      <BrowserRouter>
          {/* <Routing/> */}
          <Header/>
      </BrowserRouter>
    </div>
  )
}

export default App