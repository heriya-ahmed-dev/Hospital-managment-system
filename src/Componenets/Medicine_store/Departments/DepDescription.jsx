import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import PsychologyIcon from '@mui/icons-material/Psychology'; 
import ChildCareIcon from '@mui/icons-material/ChildCare'; 
import AccessibilityIcon from '@mui/icons-material/Accessibility'; 
import FaceIcon from '@mui/icons-material/Face'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'; 
import EmergencyIcon from '@mui/icons-material/Emergency'; 
const DepDescription = () => {
    const [DepDescription,setDepDescription] = useState([])
  const [currentpage,setcurrentpage] = useState(1)
       const [pageInput,setPageInput] = useState('')
    
       const ItemsPerPage = 2
       const lastIndex = ItemsPerPage * currentpage;
       const FirstIndex = lastIndex - ItemsPerPage
    
       const currentPageDepartment = DepDescription.slice(FirstIndex,lastIndex);
    
       const Totalpage = Math.ceil(DepDescription.length/ItemsPerPage)
       
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
     
     const handlePage = () =>{
       const page = Number(pageInput)
  
       if(page >= 1 && page <= Totalpage){
          setPageInput(page)
          setcurrentpage(pageInput)
       }
       setPageInput('')
     }
    
    
   
   const InterIcons = ({dep}) =>{
      if(dep === 'Cardiology'){
          return <FavoriteIcon className='text-[red]'/>
      }
      else if(dep === 'Neurology'){
        return <PsychologyIcon className='text-[purple]'/>
      }

      else if (dep === 'Pediatrics') {
        return <ChildCareIcon className='text-[Sky blue]' />;
    }

     else if (dep === 'Orthopedics') {
        return <AccessibilityIcon className='text-[Orange]'/>;
    }

    else if (dep === 'Dermatology') {
        return <FaceIcon className='text-[Pink]'/>;
    }

    else if (dep === 'Ophthalmology') {
        return <VisibilityIcon className='text-[Teal]'/>;
    }

    else if (dep === 'General Medicine') {
        return <MedicalServicesIcon className='text-[Blue]'/>;
    }

    else if (dep === 'Emergency Medicine') {
        return <EmergencyIcon className='text-[red]'/>;
    }

    else return <MedicalServicesIcon className='text-[brown]' />;

   }

   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/DepDescription');
      setDepDescription(response.data)
   }

   HanldeGet()
   
   },[])
   
  return (
    <div className='mt-[80px] mx-1'>
        <div className='flex justify-between m-3'>
            <p className='text-[19px] fw-semibold mt-2'>DepDescription</p>
            <Link className='flex bg-[#0069B9] mx-3 rounded-3 px-2  mt-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue] text-decoration-none' to='AddDepDescription'>
                <AddIcon/>
                <p className='text-[17px]'>Add DepDescription</p>
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
   {currentPageDepartment.map((items)=>{
    return(
        <div key={items.id}>
             <div className='text-black border-1 w-full'> </div>
            <div className=' overflow-x-hidden mx-5 ps-3 my-3 text-[17px]'>
            <p className='fs-4'>Department</p>
            <div className='flex gap-[20px]'>
                 <p className='ms-5'>{items.department}</p>
                 <InterIcons dep={items.department} className='text-[60px]'/>
            </div>
            <p className='fs-4'>Description</p>
            <p className='w-[700px] ms-5 text-justify flex justify-center text-[purple] border-1 border-[purple] p-5 rounded-1'>{items.description}</p>
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

export default DepDescription