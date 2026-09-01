import React from 'react'
import Dashboard from './Dahsboard'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const Layout = ({children}) => {
  return (
    <div className='overflow-hidden h-scree'>
      <Header/>
    <div className='flex'>
       <div className='w-[25%]'>
          <Dashboard/>
       </div>
       <div className='w-[75%]'>
         <Outlet/>
       </div>
    </div>
    </div>
  )
}

export default Layout