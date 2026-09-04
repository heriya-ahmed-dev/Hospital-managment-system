import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddDepartment = () => {
    const [AddDepartment,setAddDepartment] = useState({
      department:'',
      headDocs:'',
      doctors:'',
      patients:'',
      status:''
    });

    const [bgcolor,setbgColor] = useState('white')
    const [color,setColor] = useState('black')
    
    const navigate = useNavigate()
     const handleChange = (e) => {
        setAddDepartment({
            ...AddDepartment,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5500/AddPatient',AddDepartment);
        setAddDepartment({
            department:'',
            headDocs:'',
            doctors:'',
            patients:'',
            status:''
        })
        alert('Data succesfully sent to data base')
        navigate('/Departments')
    }
  
    const handleColor = (e) =>{
        if(e.target.value == 'Active'){
            setbgColor('#22c55e');
            setColor('white')

        }
        else if(e.target.value == 'Inactive'){
            setbgColor('#ef4444'); 
            setColor('white')
        }
        else{
            setbgColor('white')
            setColor('black')
        }
    }
    
    
  return (
    <form onSubmit={handleSubmit} className='bg-[#D3D3D3] h-screen mt-[60px]'>
           <h4 className='flex justify-center p-2'>Add Department</h4>
           <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'> Department</p>
                    <input className='bg-[white] w-[280px] h-[32px] ps-3' name='department' value={AddDepartment.department} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Head Doctors</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='headDocs' value={AddDepartment.headDocs} onChange={handleChange} />
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1 ps-[280px] text-[18px] my-1'>
                    
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Doctors</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='doctors' value={AddDepartment.doctors} onChange={handleChange}/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Patients</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='patients' value={AddDepartment.patients} onChange={handleChange} />
                </div>
                <div className='my-1'>
                   
                      </div>  
           </div>

            <div className='flex justify-center'>
                <div className='my-1'>

                        
                    <p className='ps-4 text-[18px] my-1 flex justify-center'>status</p>
                    <select className=' w-[250px]  h-[32px] ps-3' name='status' value={AddDepartment.status} onChange={
                        (e)=>{handleChange(e);handleColor(e)}
                    }
                      style={{backgroundColor:bgcolor,
                              color:color
                      }}
                    >
                         <option value="" className='text-[black]'>Select Status</option>
                         <option value="Active" >Active</option>
                         <option value="Inactive">Inactive</option>
                    </select>
                    
                </div> 
           </div>

            

       
           <div className='flex justify-center my-3'>
            <button className='bg-[#00BF4B] hover:bg-[green] w-[100px] text-white py-1 rounded-2'>Submit</button>
           </div>

           
            
    </form>
  )
}

export default AddDepartment