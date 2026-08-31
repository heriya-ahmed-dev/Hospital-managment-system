import React from 'react'
import Layout from './Componenets/Outlet/Layout'
import { Route,Routes } from 'react-router-dom'
import Doctors from './Componenets/Doctors/Doctors'
import AddDoctors from './Componenets/Doctors/AddDoctors'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Doctors/>}/>
                <Route path='AddDocs' element={<AddDoctors/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Routing