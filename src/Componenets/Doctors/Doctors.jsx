import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
const Doctors = () => {
   const [doctors,setDoctors] = useState([])
   const [currentpage,setcurrentpage] = useState(1)
     const [pageInput,setPageInput] = useState('')
  
     const ItemsPerPage = 4
     const lastIndex = ItemsPerPage * currentpage;
     const FirstIndex = lastIndex - ItemsPerPage
  
     const Currentdoc = doctors.slice(FirstIndex,lastIndex);
  
     const Totalpage = Math.ceil(doctors.length/ItemsPerPage)
     
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
   useEffect(()=>{
      const HanldeGet = async() =>{
      const response = await axios.get('http://localhost:5500/AddDocs');
      setDoctors(response.data)
   }
   HanldeGet()
   },[])

  return (
    <div className='mt-[80px] mx-3 mr-4'>
        <div className='flex justify-between m-3'>
            <p className='text-[19px] fw-semibold mt-2'>Doctors</p>
            <Link className='flex bg-[#0069B9] mx-3 rounded-3 px-2  mt-2 pt-1 text-[22px] h-[35px] text-white hover:bg-[blue] text-decoration-none' to='AddDocs'>
                <AddIcon/>
                <p className='text-[17px]'>Add Doctors</p>
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
                 <p className='text-[18px] ps-3'>Search by Code</p>
            <div className='flex bg-[whitesmoke] border-1  border-black mx-3 rounded-3 px-2  mt-2 pt-1 text-[20px] h-[35px] text-black  text-decoration-none focus:outline-black'>
                <SearchIcon className='text-black'/>
                <input className='focus:outline-none'/>
            </div>
            </div>
        </div>

        <div className='flex gap-4 overflow-x-hidden mx-4 my-3'>
            <h5 className='w-[12%]'>Image</h5>
            <h5 className='w-[12%]'>First Name</h5>
            <h5 className='w-[12%]'>Last Name</h5>
            <h5 className='w-[12%]'>Email</h5>
            <h5 className='w-[12%]'>DOB</h5>
            <h5 className='w-[12%]'>Gender</h5>
            <h5 className='w-[12%]'>Address</h5>
            <h5 className='w-[12%]'>phone</h5>
            <h5 className='w-[12%]'>Department</h5>
            <h5 className='w-[12%]'>Action</h5>
        </div>
   {Currentdoc.map((items)=>{
    return(
        <div key={items.id}>
             <div className='text-black border-1 w-full mr-4'></div>
            <div className='flex gap-[35px] overflow-x-hidden mx-5 ps-3 my-3 text-[17px]'>
            <p className='w-[17%]'><img src={items.image}/></p>
            <p className='w-[17%]'>{items.firstname}</p>
            <p className='w-[17%]'>{items.lastname}</p>
            <p className='w-[17%] w-40 truncate'>{items.email}</p>
            <p className='w-[17%]'>{items.dob.split('T')[0]}</p>
            <p className='w-[17%]'>{items.gender}</p>
            <p className='w-[17%]'>{items.address}</p>
            <p className='w-[17%]'>{items.phone}</p>
            <p className='w-[17%]'>{items.department}</p>
            <p className='w-[17%]'>{items.action}</p>
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

export default Doctors