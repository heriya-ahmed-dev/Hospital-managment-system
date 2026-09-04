import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddPatients = () => {
    const [AddPatients,setAddPatients] = useState({
      name:'',
      email:'',
      dob:'',
      age:'',
      gender:'',
      address:'',
      phone:'',
      AddPatient:''
    });
    
    const navigate = useNavigate()
     const handleChange = (e) => {
        setAddPatients({
            ...AddPatients,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5500/AddPatient',AddPatients);
        setAddPatients({
             name:'',
             email:'',
             dob:'',
             age:'',
             gender:'',
             address:'',
             phone:'',
        })
        alert('Data succesfully sent to data base')
        navigate('/patients')
    }

    
  return (
    <form onSubmit={handleSubmit} className='bg-[#D3D3D3] h-screen mt-[60px]'>
           <h4 className='flex justify-center p-2'>Add Patients</h4>
           <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'> Name</p>
                    <input className='bg-[white] w-[280px] h-[32px] ps-3' name='name' value={AddPatients.name} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Email</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='email' value={AddPatients.email} onChange={handleChange} type='email'/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1 ps-[280px] text-[18px] my-1'>
                    
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Date Of Birth</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='dob' value={AddPatients.dob} onChange={handleChange} type='date'/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'> Age</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='age' value={AddPatients.age} onChange={handleChange} />
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Gender</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='gender' value={AddPatients.gender} onChange={handleChange}/>
                </div>  
           </div>

            <div className='flex justify-center'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1 flex justify-center'>Address</p>
                    <input className='bg-[white] w-[680px]  h-[32px] ps-3' name='address' value={AddPatients.address} onChange={handleChange}/>
                </div> 
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Phone</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='phone' value={AddPatients.phone} onChange={handleChange} type='tel'/>
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

export default AddPatients