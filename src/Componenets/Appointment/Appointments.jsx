import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Appointments = () => {
   const [app,setapp] = useState([])

   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/Appointment');
      setapp(response.data)
   }
   HanldeGet()
   },[])
   
  return (
    <div className='mt-[80px] mx-1'>
        <div className='flex justify-between m-3'>
            <p className='text-[19px] fw-semibold mt-2'>Appointments</p>
            <Link className='flex bg-[#0069B9] mx-3 rounded-3 px-2  mt-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue] text-decoration-none' to='Addapps'>
                <AddIcon/>
                <p className='text-[17px]'>Add Appointments</p>
            </Link>
        </div>
        <div className='flex gap-4 overflow-x-hidden mx-4 my-3'>
            <h5 className='w-[12%]'>Patient Name</h5>
            <h5 className='w-[12%]'>Department</h5>
            <h5 className='w-[12%]'>Doctor's Name</h5>
            <h5 className='w-[12%]'>Appointment Date</h5>
            <h5 className='w-[12%]'>Appointment Time</h5>
            <h5 className='w-[12%]'>Patient Email</h5>
            <h5 className='w-[12%]'>Patient phone</h5>
            <h5 className='w-[12%]'>Action</h5>
        </div>
   {app.map((items)=>{
    return(
        <div key={items.id}>
             <div className='text-black border-1 w-full'> </div>
            <div className='flex gap-[35px] overflow-x-hidden mx-5 ps-3 my-3 text-[17px]'>
            <p className='w-[17%]'>{items.patientname}</p>
            <p className='w-[17%]'>{items.department}</p>
            <p className='w-[17%]'>{items.doctorname}</p>
            <p className='w-[17%]'>{items.appdate.split('T')[0]}</p>
            <p className='w-[17%]'>{items.apptime}</p>
            <p className='w-[17%] truncate'>{items.patientemail}</p>
             <p className='w-[17%]'>{items.patientphone}</p>
            <p className='w-[17%]'>{items.action}</p>
        </div>
        </div>
    )
   })}

          
    </div>
  )
}

export default Appointments