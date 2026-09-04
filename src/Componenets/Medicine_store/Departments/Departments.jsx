import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
const Departments = () => {
    const [currentpage , setCurrentpage] = useState(1)
    const ItemsPerPage = 4
    const LastIndex = currentpage * ItemsPerPage;
    const FirstIndex = LastIndex - ItemsPerPage;
   const [Department,setDepartment] = useState([])
   const [pageInput,setPageInput] = useState('')
   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/Departments');
      setDepartment(response.data)
   }

   HanldeGet()
   
   },[])
   const currentPageDepartment = Department.slice(FirstIndex,LastIndex);
   const TotalPage = Math.ceil(Department/ItemsPerPage);

   const NextPage = () =>{
    if(currentpage < TotalPage){
       setCurrentpage(currentpage+1)
    }    
      
   }

   const PrevPage = () =>{
    if(currentpage > 1){
        setCurrentpage(currentpage - 1)
    }
   }
   const handlePage = () =>{
     const page = Number(pageInput)

     if(page >= 1 && page <= Totalpage){
        setPageInput(page)
        setcurrentpage(pageInput)
     }
     setPageInput('')
   }

   
  return (
    <div className='mt-[80px] mx-1'>
        <div className='flex justify-between m-3'>
            <p className='text-[19px] fw-semibold mt-2'>Departments</p>
            <Link className='flex bg-[#0069B9] mx-3 rounded-3 px-2  mt-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue] text-decoration-none' to='AddDepartments'>
                <AddIcon/>
                <p className='text-[17px]'>Add Departments</p>
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
            <div>
                 <p className='text-[18px] ps-3'>Search by Department</p>
            <div className='flex bg-[whitesmoke] border-1  border-black mx-3 rounded-3 px-2  mt-2 pt-1 text-[20px] h-[35px] text-black  text-decoration-none focus:outline-black'>
                <SearchIcon className='text-black'/>
                <input className='focus:outline-none'/>
            </div>
            </div>
        </div>
        <div className='flex justify-center gap-4 overflow-x-hidden mx-4 my-3'>
            <h5 className='w-[20%]'>Department</h5>
            <h5 className='w-[20%]'>Head Doctors</h5>
            <h5 className='w-[20%]'>Doctors</h5>
            <h5 className='w-[20%]'>Patients</h5>
            <h5 className='w-[20%]'>Status</h5>
        </div>
   {currentPageDepartment.map((items)=>{
    return(
        <div key={items.id}>
             <div className='text-black border-1 w-full'> </div>
            <div className='flex gap-[35px] overflow-x-hidden mx-5 ps-3 my-3 text-[17px]'>
            <p className='w-[20%]'>{items.department}</p>
            <p className='w-[20%]'>{items.headDocs}</p>
            <p className='w-[20%]'>{items.doctors}</p>
            <p className='w-[20%]'>{items.patients}</p>
            <p className='w-[20%]'>{items.status}</p>
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

export default Departments