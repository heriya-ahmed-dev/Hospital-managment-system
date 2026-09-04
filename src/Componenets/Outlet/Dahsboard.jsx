import React from 'react';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import PaymentsIcon from '@mui/icons-material/Payments';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import PersonalInjuryIcon from '@mui/icons-material/PersonalInjury';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className='border-radius-3 bg-[#FCFCF7] rounded-3'>
        <h3 className='ms-5 my-3'>Main</h3>
        <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 rounded-3 hover:!text-[#4599DB]'>
            <DashboardIcon className='text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none' to='/'>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Dashboard
            </p>
            </Link>
        </div>

         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <MedicalServicesIcon className=' text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none ' to='doctors'>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Doctors
            </p>
            </Link>
        </div>

         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <PersonalInjuryIcon className='text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none' to='patients'>
            <p className='text-black text-[20px] hover:!text-[#4599DB] h'>
               Patients
            </p>
            </Link>
        </div>

         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <EventIcon className='text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none' to='appointments'>
            <p className='text-black text-[20px] hover:!text-[#4599DB] h'>
               Appointments
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <BusinessIcon className='text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none' to='departments'>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Departments
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <PeopleIcon className='text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none' to='Employees'>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Employees
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <PaymentsIcon className='text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Payroll
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <EmailIcon className='text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Email
            </p>
            </Link>
        </div>

         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <LocalPharmacyIcon className='text-[#850883] hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none' to='MedicineStore'>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Medicine Store
            </p>
            </Link>
        </div>
       
        
    </div>
  )
}

export default Dashboard