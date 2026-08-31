import React from 'react'
import Dashboard from './Dahsboard'
import { Outlet } from 'react-router-dom'
const Layout = ({children}) => {
  return (
    <div className='flex'>
       <div className='w-[25%]'>
          <Dashboard/>
       </div>
       <div className='w-[75%]'>
         <Outlet/>
       </div>
    </div>
  )
}

export default Layout