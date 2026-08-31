import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListIcon from '@mui/icons-material/List';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
const Header = () => {
  return (
    <div className='flex justify-between px-5 w-full bg-[#0069B9]'>
        <div className='flex gap-5 pt-3'>
            <div className='flex  gap-2'>
                <LocalHospitalIcon className='text-[white]'/>
                <p className='text-[white] text-[18px]'>Pre Clinic</p>
            </div>
            <div>
                <ListIcon className='text-[white] text-[19px]'/>
            </div>
        </div>
        <div className='flex gap-3 mt-3 mr-4'>
            <NotificationsIcon className='text-[white]'/>
            <MessageIcon className='text-[white]'/>
            <AccountCircleIcon className='text-[white]'/>
        </div>
    </div>
  )
}

export default Header