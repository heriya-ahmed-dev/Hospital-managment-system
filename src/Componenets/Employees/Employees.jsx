import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Employees = () => {
   const [Employees,setEmployees] = useState([])

   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/Employees');
      setEmployees(response.data)
   }
   HanldeGet()
   },[])
   

  return (
    <div className='mt-[80px] mx-3 mr-4'>
        <div className='flex justify-between m-3'>
            <p className='text-[19px] fw-semibold mt-2'>Employees</p>
            <Link className='flex bg-[#0069B9] mx-3 rounded-3 px-2  mt-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue] text-decoration-none' to='Addemployee'>
                <AddIcon/>
                <p className='text-[17px]'>Add Employees</p>
            </Link>
        </div>
        <div className='flex gap-4 overflow-x-hidden mx-4 my-3'>
            <h5 className='w-[12%]'>Employee Name</h5>
            <h5 className='w-[12%]'>Email</h5>
            <h5 className='w-[12%]'>gender</h5>
            <h5  className='w-[12%]'>phone</h5>
            <h5 className='w-[12%]'>Join Date</h5>
            <h5 className='w-[12%]'>Role</h5>
            <h5 className='w-[12%]'>Action</h5>
        </div>
   {Employees.map((items)=>{
    return(
        <div key={items.id}>
             <div className='text-black border-1 w-full mr-4'></div>
            <div className='flex gap-[35px] overflow-x-hidden mx-5 ps-3 my-3 text-[17px]'>
            <p className='w-[17%]'>{items.employeename}</p>
            <p className='w-[17%] truncate'>{items.email}</p>
            <p className='w-[17%]'>{items.gender}</p>
            <p className='w-[17%]'>{items.phone}</p>
            <p className='w-[17%]'>{items.joindate}</p>
            <p className='w-[17%]'>{items.role}</p>
            <p className='w-[17%]'>{items.action}</p>
        </div>
        </div>
    )
   })}

          
    </div>
  )
}

export default Employees