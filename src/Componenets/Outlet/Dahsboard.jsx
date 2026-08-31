import React from 'react';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div className='border-radius-3 bg-[#FCFCF7] rounded-3'>
        <h3 className='ms-5 my-3'>Main</h3>
        <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 rounded-3 hover:!text-[#4599DB]'>
            <CropSquareIcon className='hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Dashboard
            </p>
            </Link>
        </div>

         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <CropSquareIcon className='hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Doctors
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <CropSquareIcon className='hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB] h'>
               Appointments
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <CropSquareIcon className='hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Departments
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <CropSquareIcon className='hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Employees
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <CropSquareIcon className='hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Payroll
            </p>
            </Link>
        </div>
         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <CropSquareIcon className='hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none '>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Email
            </p>
            </Link>
        </div>

         <div className='flex gap-2 my-2 mx-4 hover:bg-[#F5F5F5] w-[200px] pt-1 ps-2 hover:!text-[#4599DB]'>
            <CropSquareIcon className='hover:text-[#4599DB] mt-[5px]'/>
            <Link className='text-decoration-none'>
            <p className='text-black text-[20px] hover:!text-[#4599DB]'>
               Medical Story
            </p>
            </Link>
        </div>
       
        
    </div>
  )
}

export default Dashboard