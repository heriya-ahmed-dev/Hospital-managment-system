import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMedicine = () => {
    const [addMedicine,setAddMedicine] = useState({
      medicineCode:'',
      medicineNum: '',
      expiry:'',
      expiryEnd:'',
      price:'',
      quantity:'',
      action:''
    });
    
    const navigate = useNavigate()
     const handleChange = (e) => {
        setAddMedicine({
            ...addMedicine,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5500/medicineStore',addMedicine);
        setAddMedicine({
          medicineCode:'',
          medicineNum: '',
          expiry:'',
          expiryEnd:'',
          price:'',
          quantity:'',
          action:''
        })
        alert('Data succesfully sent to data base')
        navigate('/MedicineStore')
    }

    //  <p className='w-[17%]'>{items.medicineCode}</p>
    //         <p className='w-[17%]'>{items.medicineNum}</p>
    //         <p className='w-[17%]'>{items.expiry}</p>
    //         <p className='w-[17%]'>{items.expiryEnd}</p>
    //         <p className='w-[17%]'>{items.price}</p>
    //         <p className='w-[17%]'>{items.quantity}</p>
    //         <p className='w-[17%]'>{items.action}</p>
 
  return (
    <form onSubmit={handleSubmit} className='bg-[#D3D3D3] h-screen mt-[60px]'>
           <h4 className='flex justify-center p-2'>Add Medicine</h4>
           <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Medicine Code</p>
                    <input className='bg-[white] w-[280px] h-[32px] ps-3' name='medicineCode' value={addMedicine.medicineCode} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Medicine Number</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='medicineNum' value={addMedicine.medicineNum} onChange={handleChange} />
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1 ps-[280px] text-[18px] my-1'>          
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Expiry</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='expiry' value={addMedicine.expiry} onChange={handleChange}/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Expiry End</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='expiryEnd' value={addMedicine.expiryEnd} onChange={handleChange} type='date'/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Price</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='price' value={addMedicine.price} onChange={handleChange}/>
                </div>  
           </div>

            <div className='flex justify-center'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1 flex justify-center'>Quantity</p>
                    <input className='bg-[white] w-[680px]  h-[32px] ps-3' name='quantity' value={addMedicine.quantity} onChange={handleChange}/>
                </div> 
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Action</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='action' value={addMedicine.action} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                </div>  
           </div>
      
           <div className='flex justify-center my-3'>
            <button className='bg-[#00BF4B] hover:bg-[green] w-[100px] text-white py-1 rounded-2'>Submit</button>
           </div>
    
    </form>
  )
}

export default AddMedicine;