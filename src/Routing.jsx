import React from 'react'
import Layout from './Componenets/Outlet/Layout'
import { Route,Routes } from 'react-router-dom'
import Doctors from './Componenets/Doctors/Doctors'
import AddDoctors from './Componenets/Doctors/AddDoctors'
import Appointments from './Componenets/Appointment/Appointments'
import AddAppointment from './Componenets/Appointment/Addappointments'
import Employees from './Componenets/Employees/Employees'
import AddEmployees from './Componenets/Employees/AddEmpoloyees'
import MedicineStore from './Componenets/Medicine_store/Medicine_store'
import AddMedicine from './Componenets/Medicine_store/AddMedicine'
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='doctors' element={<Doctors/>}/>
                <Route path='doctors/AddDocs' element={<AddDoctors/>}/>
                <Route path='appointments' element={<Appointments/>}/>
                <Route path='appointments/addapps' element={<AddAppointment/>}/>
                <Route path='/Employees' element={<Employees/>}/>
                <Route path='/Employees/Addemployee' element={<AddEmployees/>}/>
                <Route path='MedicineStore' element={<MedicineStore/>}/>
                <Route path='MedicineStore/AddMedicine' element={<AddMedicine/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Routing