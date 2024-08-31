import React from 'react'
import menu_icon from '../../src/assets/menu.png'
import logo_icon from '../../src/assets/logo.png'
import search_icon from '../../src/assets/search.png'
import upload_icon from '../../src/assets/upload.png'
import more_icon from '../../src/assets/more.png'
import notification_icon from '../../src/assets/notification.png'
import profile_icon from '../../src/assets/jack.png'

import { Link } from 'react-router-dom'
const Navbar = ({setsidbar,sidbar}) => {
  return (
    <nav className='sticky top-0 z-10 bg-white flex items-center justify-between shadow-xl px-5 py-2'>
   <div className="left flex items-center">
    <img className='menu w-[25px] mr-[20px] cursor-pointer' onClick={function(){setsidbar(!sidbar)}} src={menu_icon} alt="" />
    <Link to='/'><img className='w-[125px] mr-4 cursor-pointer' src={logo_icon} alt="" /></Link>
   </div>
   <div className="mid flex items-center border-[1px] border-zinc-500 border-solid mr-[13px] rounded-2xl px-2 py-[5px] ">
    <input className='bg-transparent outline-none w-[350px]' type="text"  placeholder='Search'/>
    <img className='w-[18px] cursor-pointer' src={search_icon} alt="" />
   </div>
   <div className="right flex items-center">
    <img className='w-[25px] mr-[25px] cursor-pointer' src={upload_icon} alt="" />
    <img className='w-[25px] mr-[25px] cursor-pointer' src={more_icon} alt="" />
    <img className='w-[25px] mr-[25px] cursor-pointer' src={notification_icon} alt="" />
    <img className='profile w-[35px] mr-[25px] cursor-pointer rounded-full' src={profile_icon} alt="" />
   </div>

    </nav>
  )
}

export default Navbar
