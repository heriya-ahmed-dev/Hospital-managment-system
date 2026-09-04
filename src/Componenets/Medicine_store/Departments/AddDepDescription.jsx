import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddDepDescription = () => {
    const [AddDepDescription,setAddDepDescription] = useState({
      department:'',
      description:''
    });

    
    const navigate = useNavigate()
     const handleChange = (e) => {
        setAddDepDescription({
            ...AddDepDescription,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5500/DepDescription',AddDepDescription);
        setAddDepDescription({
            department:'',
            description:''
        })
        alert('Data succesfully sent to data base')
        navigate('/')
    }
  
   
    
    
  return (
    <form onSubmit={handleSubmit} className='bg-[#D3D3D3] h-screen mt-[60px]'>
           <h4 className='flex justify-center p-2'>Add Department Description</h4>
           <div className='flex flex-col justify-center gap-[20px]'>
                <div className='my-'>
                    <p className='text-[18px] my-1 m-auto flex justify-center '> Department</p>
                    <input className='bg-[white] w-[280px] h-[32px] flex justify-center m-auto rounded-2 ps-2' name='department' value={AddDepDescription.department} onChange={handleChange}/>
                </div>
                <div className='my-0'>
                    <p className='ps-4 text-[18px] my-1  m-auto flex justify-center fs-5'>Description</p>
                    <textarea className='bg-[white] w-[500px]  h-[300px] ps-3 flex justify-center m-auto  rounded-2 py-2' name='description' value={AddDepDescription.description} onChange={handleChange} />
                </div>  
           </div>    
           <div className='flex justify-center my-3'>
            <button className='bg-[#00BF4B] hover:bg-[green] w-[100px] text-white py-1 rounded-2'>Submit</button>
           </div>
       
    </form>
  )
}

export default AddDepDescription