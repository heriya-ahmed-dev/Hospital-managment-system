import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Appointments = () => {
    const [currentpage , setCurrentpage] = useState(1)
    const ItemsPerPage = 4
    const LastIndex = currentpage * ItemsPerPage;
    const FirstIndex = LastIndex - ItemsPerPage;
   const [app,setapp] = useState([])

   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/Appointment');
      setapp(response.data)
   }
   HanldeGet()
   },[])
   const currentPageapp = app.slice(FirstIndex,LastIndex);
   const TotalPage = Math.ceil(app/ItemsPerPage);

   const NextPage = () =>{
    if(currentpage < Totalpage){
       setcurrentpage(currentpage+1)
    }    
      
   }

   const PrevPage = () =>{
    if(currentpage > 1){
        setcurrentpage(currentpage - 1)
    }
   }
   
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
   {currentPageapp.map((items)=>{
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
       
       <div className='flex justify-center gap-5 mb-4'>
        <button className='w-[80px] bg-[#2FB674] hover:bg-[green] rounded-2 h-[35px] text-white' onClick={PrevPage}>Previous</button>
        <button className='w-[80px] bg-[#2FB674] hover:bg-[green] rounded-2 h-[35px] text-white' onClick={NextPage}>Next</button>
     </div>
          
    </div>
  )
}

export default Appointments