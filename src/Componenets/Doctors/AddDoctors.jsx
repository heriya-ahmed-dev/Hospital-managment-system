import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    
    const navigate = useNavigate()
     const handleChange = (e) => {
        setAddDocs({
            ...addDocs,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5500/AddDocs',addDocs);
        setAddDocs({
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
        })
        alert('Data succesfully sent to data base')
        navigate('/home')
    }

    
  return (
    <form onSubmit={handleSubmit} className='bg-[#D3D3D3] h-screen'>
           <h4 className='flex justify-center p-2'>Add Doctors</h4>
           <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>First Name</p>
                    <input className='bg-[white] w-[280px] h-[32px] ps-3' name='firstname' value={addDocs.firstname} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>last Name</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='lastname' value={addDocs.lastname} onChange={handleChange} />
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1 ps-[280px] text-[18px] my-1'>
                    
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Email</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='email' value={addDocs.email} onChange={handleChange}/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Date of Birth</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='dob' value={addDocs.dob} onChange={handleChange} type='date'/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Gender</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='gender' value={addDocs.gender} onChange={handleChange}/>
                </div>  
           </div>

            <div className='flex justify-center'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1 flex justify-center'>Address</p>
                    <input className='bg-[white] w-[680px]  h-[32px] ps-3' name='address' value={addDocs.address} onChange={handleChange}/>
                </div> 
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Phone</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='phone' value={addDocs.phone} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Image</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='image' value={addDocs.image} onChange={handleChange} type='file'/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Department</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='department' value={addDocs.department} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Action</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='action' value={addDocs.action} onChange={handleChange}/>
                </div>  
           </div>
           <div className='flex justify-center my-3'>
            <button className='bg-[#00BF4B] hover:bg-[green] w-[100px] text-white py-1 rounded-2'>Submit</button>
           </div>

           
            
    </form>
  )
}

export default AddDoctors