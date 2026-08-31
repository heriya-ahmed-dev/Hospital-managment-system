import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios'
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
            <p className='text-[19px] fw-semibold'>Doctors</p>
            <button className='flex bg-[#99C3FF] mx-3 rounded-3 px-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue]'>
                <AddIcon/>
                <p className='text-[17px]'>Add Doctors</p>
            </button>
        </div>
        <div className='flex gap-4 overflow-x-hidden mx-5 my-3'>
            <h5>Image</h5>
            <h5>First Name</h5>
            <h5>Last Name</h5>
            <h5>Email</h5>
            <h5>DOB</h5>
            <h5>Gender</h5>
            <h5>Address</h5>
            <h5>phone</h5>
            <h5>Department</h5>
            <h5>Action</h5>
        </div>
   {doctors.map((items)=>{
    return(
        <div key={items.id}>
            <div className='flex gap-[36px] overflow-x-hidden mx-5 my-3 text-[17px]'>
            <p><img src={items.image}/></p>
            <p>{items.firstname}</p>
            <p>{items.lastname}</p>
            <p>{items.email}</p>
            <p>{items.dob.slice('T')[0]}</p>
            <p>{items.gender}</p>
            <p>{items.address}</p>
            <p>{items.phone}</p>
            <p>{items.department}</p>
            <p>{items.action}</p>
        </div>
        </div>
    )
   })}
          
    </div>
  )
}

export default Doctors