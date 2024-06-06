import React, { useEffect, useState } from 'react'
import { PiHouseFill, PiKeyboardFill, PiMailboxFill } from 'react-icons/pi'
import { SIDE_ITEMS } from '../../../data/data'
import SidebarItem from '../SidebarItem/SidebarItem'
import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [active, setActive] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className='w-[240px] fixed bg-gradient-to-r from-[rgba(47,54,97,0.28)] to-[rgba(37,42,76,0)] h-screen border-r-gradient flex flex-col items-start justify-start px-4 py-8'>
      <h2 className='font-bolder text-white text-3xl'>mitre.</h2>
      <div className='flex flex-col items-start justify-center gap-6 mt-12'>
      {
        SIDE_ITEMS.map((item, index)=>(
            <SidebarItem name = {item.name} href = {item.href} Icon= {item.Icon} key={index} active={active}/>
        ))
      }
      </div>

    </div>
  )
}

export default Sidebar
