import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const MedicineStore = () => {
   const [MedicineStore,setMedicineStore] = useState([])

   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/medicineStore');
      setMedicineStore(response.data)
   }
   HanldeGet()
   },[])
   

  return (
    <div className='mt-[80px] mx-3 mr-4'>
        <div className='flex justify-between m-3'>
            <p className='text-[19px] fw-semibold mt-2'>MedicineStore</p>
            <Link className='flex bg-[#0069B9] mx-3 rounded-3 px-2  mt-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue] text-decoration-none' to='AddMedicine'>
                <AddIcon/>
                <p className='text-[17px]'>Add MedicineStore</p>
            </Link>
        </div>
        <div className='flex gap-4 overflow-x-hidden mx-4 my-3'>
            <h5 className='w-[12%]'>Medicine Code</h5>
            <h5 className='w-[12%]'>Medicine Number</h5>
            <h5 className='w-[12%]'>Purchase Date</h5>
            <h5 className='w-[12%]'>Expire</h5>
            <h5 className='w-[12%]'>Expire End</h5>
            <h5 className='w-[12%]'>Price</h5>
            <h5 className='w-[12%]'>Quantity</h5>
            <h5 className='w-[12%]'>Action</h5>
        </div>
   {MedicineStore.map((items)=>{
    return(
        <div key={items.id}>
             <div className='text-black border-1 w-full mr-4'></div>c
            <div className='flex gap-[35px] overflow-x-hidden mx-5 ps-3 my-3 text-[17px]'>
            <p className='w-[17%]'>{items.medicineCode}</p>
            <p className='w-[17%]'>{items.medicineNum}</p>
            <p className='w-[17%]'>{items.expiry}</p>
            <p className='w-[17%]'>{items.expiryEnd}</p>
            <p className='w-[17%]'>{items.price}</p>
            <p className='w-[17%]'>{items.quantity}</p>
            <p className='w-[17%]'>{items.action}</p>
        </div>
        </div>
    )
   })}

          
    </div>
  )
}

export default MedicineStore