import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddEmployees = () => {
    const [addEmployee,setAddEmployee] = useState({
      employeename:'',
      email:'',
      gender: '',
      phone:'',
      joindate:'',
      role:'',
      action:''
    });

    const navigate = useNavigate()
     const handleChange = (e) => {
        setAddEmployee({
            ...addDocs,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5500/Employees',addEmployee);
        setAddDocs({
            employeename:'',
            email:'',
            gender: '',
            phone:'',
            joindate:'',
            role:'',
            action:''
        })
        alert('Data succesfully sent to data base')
        navigate('/Employees')
    }

    
  return (
    <form onSubmit={handleSubmit} className='bg-[#D3D3D3] h-screen mt-[60px]'>
           <h4 className='flex justify-center p-2'>Add Employees</h4>
           <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Employee Name</p>
                    <input className='bg-[white] w-[280px] h-[32px] ps-3' name='employeename' value={addEmployee.employeename} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>email</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='email' value={addEmployee.email} onChange={handleChange} type='email'/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1 ps-[280px] text-[18px] my-1'>
                    
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Gender</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='gender' value={addEmployee.gender} onChange={handleChange} type='email'/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Phone</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='phone' value={addEmployee.phone} onChange={handleChange} type='tel'/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Join Date</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='joindate' value={addEmployee.joindate} onChange={handleChange} type='date'/>
                </div>  
           </div>

            <div className='flex justify-center'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1 flex justify-center'>Role</p>
                    <input className='bg-[white] w-[680px]  h-[32px] ps-3' name='role' value={addEmployee.role} onChange={handleChange}/>
                </div> 
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Action</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='action' value={addEmployee.action} onChange={handleChange} type='file'/>
                </div>  
           </div>

           <div className='flex justify-center my-3'>
            <button className='bg-[#00BF4B] hover:bg-[green] w-[100px] text-white py-1 rounded-2'>Submit</button>
           </div>

           
            
    </form>
  )
}

export default AddEmployees