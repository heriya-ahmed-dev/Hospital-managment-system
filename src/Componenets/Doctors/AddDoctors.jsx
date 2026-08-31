import React from 'react'
import { useState,useeffect } from 'react'
import axios from 'axios'
const AddDoctors = () => {
    const [addDocs,setAddDocs] = useState({
      image: '',
      firstname:'',
      lastname: '',
      email:'',
      dob:'',
      gender:'',
      address:'',
      phone:'',
      department:'',
      action:''
    });

    const handleSubmit = async(e) =>{
        e.preventDefault();
        axios.post('',addDocs)
    }

    const handleChange = (e) => {
        setAddDocs({
            ...addDocs,
            [e.target.name] : e.target.value
        })
    }
  return (
    <form onClick={handleSubmit} className='bg-[#D3D3D3] h-screen'>
           <h4 className='flex justify-center p-2'>Add Doctors</h4>
           <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>First Name</p>
                    <input className='bg-[white] w-[280px] h-[32px]' name='firstname'/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>last Name</p>
                    <input className='bg-[white] w-[280px]  h-[32px]' name='lastname'/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1 ps-[280px] text-[18px] my-1'>
                    
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Email</p>
                    <input className='bg-[white] w-[280px]  h-[32px]' name='email'/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Date of Birth</p>
                    <input className='bg-[white] w-[280px]  h-[32px]' name=''/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Gender</p>
                    <input className='bg-[white] w-[280px]  h-[32px]'/>
                </div>  
           </div>

            <div className='flex justify-center'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1 flex justify-center'>Address</p>
                    <input className='bg-[white] w-[680px]  h-[32px]'/>
                </div> 
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Phone</p>
                    <input className='bg-[white] w-[280px]  h-[32px]'/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Image</p>
                    <input className='bg-[white] w-[280px]  h-[32px]'/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Department</p>
                    <input className='bg-[white] w-[280px]  h-[32px]'/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Action</p>
                    <input className='bg-[white] w-[280px]  h-[32px]'/>
                </div>  
           </div>
           <div className='flex justify-center my-3'>
            <button className='bg-[#00BF4B] hover:bg-[green] w-[100px] text-white py-1 rounded-2'>Submit</button>
           </div>

           
            
    </form>
  )
}

export default AddDoctors