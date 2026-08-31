import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Doctors = () => {
   const [doctors,setDoctors] = useState([])

   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/AddDocs');
      setDoctors(response.data)
   }
   HanldeGet()
   },[])
   

  return (
    <div className='h-screen'>
        <div className='flex justify-between m-3'>
            <p className='text-[19px] fw-semibold mt-2'>Doctors</p>
            <Link className='flex bg-[#99C3FF] mx-3 rounded-3 px-2  mt-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue] text-decoration-none' to='AddDocs'>
                <AddIcon/>
                <p className='text-[17px]'>Add Doctors</p>
            </Link>
        </div>
        <div className='flex gap-4 overflow-x-hidden mx-4 my-3'>
            <h5 className='w-[12%]'>Image</h5>
            <h5 className='w-[12%]'>First Name</h5>
            <h5 className='w-[12%]'>Last Name</h5>
            <h5 className='w-[12%]'>Email</h5>
            <h5 className='w-[12%]'>DOB</h5>
            <h5 className='w-[12%]'>Gender</h5>
            <h5 className='w-[12%]'>Address</h5>
            <h5 className='w-[12%]'>phone</h5>
            <h5 className='w-[12%]'>Department</h5>
            <h5 className='w-[12%]'>Action</h5>
        </div>
   {doctors.map((items)=>{
    return(
        <div key={items.id}>
             <div className='text-black border-1 w-full'> </div>
            <div className='flex gap-[35px] overflow-x-hidden mx-5 ps-3 my-3 text-[17px]'>
            <p className='w-[17%]'><img src={items.image}/></p>
            <p className='w-[17%]'>{items.firstname}</p>
            <p className='w-[17%]'>{items.lastname}</p>
            <p className='w-[17%] truncate'>{items.email}</p>
            <p className='w-[17%]'>{items.dob.slice('T')[0]}</p>
            <p className='w-[17%]'>{items.gender}</p>
            <p className='w-[17%]'>{items.address}</p>
            <p className='w-[17%]'>{items.phone}</p>
            <p className='w-[17%]'>{items.department}</p>
            <p className='w-[17%]'>{items.action}</p>
        </div>
        </div>
    )
   })}

          
    </div>
  )
}

export default Doctors