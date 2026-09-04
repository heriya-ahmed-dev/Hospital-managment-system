import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
const Patients = () => {
   const [Patients,setPatients] = useState([])
   const [currentpage,setcurrentpage] = useState(1)
     const [pageInput,setPageInput] = useState('')
  
     const ItemsPerPage = 4
     const lastIndex = ItemsPerPage * currentpage;
     const FirstIndex = lastIndex - ItemsPerPage
  
     const Currentpatient = Patients.slice(FirstIndex,lastIndex);
  
     const Totalpage = Math.ceil(Patients.length/ItemsPerPage)
     
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
   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/AddPatient');
      setPatients(response.data)
   }
   HanldeGet()
   },[])
   const handlePage = () =>{
     const page = Number(pageInput)

     if(page >= 1 && page <= Totalpage){
        setPageInput(page)
        setcurrentpage(pageInput)
     }
     setPageInput('')
   }
console.log(Patients)


  return (
    <div className='mt-[80px] mx-3 mr-4'>
        <div className='flex justify-between m-3'>
            <p className='text-[19px] fw-semibold mt-2'>Patients</p>
            <Link className='flex bg-[#0069B9] mx-3 rounded-3 px-2  mt-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue] text-decoration-none' to='AddPatiens'>
                <AddIcon/>
                <p className='text-[17px]'>Add Patients</p>
            </Link>
        </div>

        <div className='flex justify-left m-4 gap-[50px]'>
             <div>
                <p className='text-[18px] ps-1' >Inter Page No</p>
                <div className='flex justify gap-2'>
                    <input className='text-[19px] fw-semibold mt-2 bg-[whitesmoke] border-1 border-black w-[35px] rounded-2 ps-1' onChange={(e)=>setPageInput(e.target.value)}   value={pageInput}/>
                    <button className='bg-[#2FB674] hover:bg-[green] text-white w-[30px] rounded-2 h-[30px] mt-2' onClick={handlePage}>Go</button>
                </div>
            </div>
        </div>

        <div className='flex gap-4 overflow-x-hidden mx-4 my-3'>
            <h5 className='w-[14%] ms-4'>Name</h5>
            <h5 className='w-[12%]'>Email</h5>
            <h5 className='w-[12%]'>DOB</h5>
            <h5 className='w-[12%]'>Age</h5>
            <h5 className='w-[12%]'>Gender</h5>
            <h5 className='w-[12%]'>Address</h5>
            <h5 className='w-[12%]'>Phone</h5>
        </div>
   {Currentpatient.map((items)=>{
    return(
        <div key={items.id}>
             <div className='text-black border-1 w-full ms-0 ps-0'></div>
            <div className='flex gap-[40px] overflow-x-hidden mx-5 ps-3 my-3 text-[17px]'>
            <p className='w-[20%]'>{items.name}</p>
            <p className='w-[20%] w-40 truncate'>{items.email}</p>
            <p className='w-[20%]'>{items.dob.split('T')[0]}</p>
            <p className='w-[20%]'>{items.age}</p>
            <p className='w-[20%]'>{items.gender}</p>
            <p className='w-[20%]'>{items.address}</p>
            <p className='w-[20%]'>{items.phone}</p>
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

export default Patients