import React from 'react'
import Layout from './Componenets/Outlet/Layout'
import { Route,Routes } from 'react-router-dom'
import Doctors from './Componenets/Doctors/Doctors'
import AddDoctors from './Componenets/Doctors/AddDoctors'
import Appointments from './Componenets/Appointment/Appointments'
import AddAppointment from './Componenets/Appointment/Addappointments'
import Dashboard from './Componenets/Outlet/Dahsboard'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='doctors' element={<Doctors/>}/>
                <Route path='doctors/AddDocs' element={<AddDoctors/>}/>
                <Route path='appointments' element={<Appointments/>}/>
                <Route path='appointments/addapps' element={<AddAppointment/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Routing