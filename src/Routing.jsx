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
import Patients from './Componenets/Patients/Patients'
import AddPatients from './Componenets/Patients/AddPatients'
import Departments from './Componenets/Medicine_store/Departments/Departments'
import AddDepartment from './Componenets/Medicine_store/Departments/AddDepartment'
import DepDescription from './Componenets/Medicine_store/Departments/DepDescription'
import AddDepDescription from './Componenets/Medicine_store/Departments/AddDepDescription'
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
                <Route path='patients' element={<Patients/>}/>
                <Route path='patients/AddPatiens' element={<AddPatients/>}/>
                <Route path='departments' element={<Departments/>}/>
                <Route path='departments/AddDepartments' element={<AddDepartment/>}/>
                <Route path='departments/DepDescription' element={<DepDescription/>}/>
                <Route path='departments/DepDescription/AddDepDescription' element={<AddDepDescription/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default Routing