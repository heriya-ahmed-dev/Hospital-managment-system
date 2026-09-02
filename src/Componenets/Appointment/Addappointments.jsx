import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAppointment = () => {
    const [addApp,setAddApps] = useState({
      patientname:'',
      department: '',
      doctorname:'',
      appdate:'',
      apptime:'',
      patientemail:'',
      patientphone:'',
      action:''
    });
    
    const navigate = useNavigate()
     const handleChange = (e) => {
        setAddApps({
            ...addApp,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5500/Appointment',addApp);
        setAddApps({
          patientname:'',
          department: '',
          doctorname:'',
          appdate:'',
          apptime:'',
          patientemail:'',
          patientphone:'',
          action:''
        })
        alert('Data succesfully sent to data base')
        navigate('/appointments')
    }
 
  return (
    <form onSubmit={handleSubmit} className='bg-[#D3D3D3] h-screen mt-[60px]'>
           <h4 className='flex justify-center p-2'>Add Appointment</h4>
           <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Patient Name</p>
                    <input className='bg-[white] w-[280px] h-[32px] ps-3' name='patientname' value={addApp.patientname} onChange={handleChange}/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>department</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='department' value={addApp.department} onChange={handleChange} />
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1 ps-[280px] text-[18px] my-1'>          
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Doctor's Name</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='doctorname' value={addApp.doctorname} onChange={handleChange}/>
                </div>  
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Appointment Date</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='appdate' value={addApp.appdate} onChange={handleChange} type='date'/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Appointment Time</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='apptime' value={addApp.apptime} onChange={handleChange} type="tel"/>
                </div>  
           </div>

            <div className='flex justify-center'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1 flex justify-center'>Patient Email</p>
                    <input className='bg-[white] w-[680px]  h-[32px] ps-3' name='patientemail' value={addApp.patientemail} onChange={handleChange} type='email'/>
                </div> 
           </div>

            <div className='flex justify-center gap-[120px]'>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Patient Phone</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='patientphone' value={addApp.patientphone} onChange={handleChange} type='tel'/>
                </div>
                <div className='my-1'>
                    <p className='ps-4 text-[18px] my-1'>Action</p>
                    <input className='bg-[white] w-[280px]  h-[32px] ps-3' name='action' value={addApp.action} onChange={handleChange}/>
                </div>  
           </div>
      
           <div className='flex justify-center my-3'>
            <button className='bg-[#00BF4B] hover:bg-[green] w-[100px] text-white py-1 rounded-2'>Submit</button>
           </div>
    
    </form>
  )
}

export default AddAppointment;