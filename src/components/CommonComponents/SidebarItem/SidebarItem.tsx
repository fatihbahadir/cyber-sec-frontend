import React, { useState } from 'react'
import { IconType } from 'react-icons/lib'
import { Link } from 'react-router-dom'

interface SidebarItemProps {
    name: string,
    href: string,
    Icon: IconType,
    active: string
}

const SidebarItem = ({ name, href, Icon, active } : SidebarItemProps) => {

  return (
    <div className='flex items-center justify-center gap-4 group cursor-pointer'>
       <div className="bg-gradient-to-bl from-[#2B54E7] to-[rgba(255,255,255,0.1)] text-white p-[1px] rounded-xl"> 
            <div className={`rounded-xl p-2 flex flex-col transition-all group-hover:bg-strokeBlue ${active === href ? "bg-strokeBlue" : "bg-main"}`}>
                <Icon className={`w-[20px] h-[20px] group-hover:text-white  ${active === href ? "text-white" : "text-fontColor"}`}/>
            </div>
      </div>
      <div className={`group-hover:text-white transition-all ${active === href ? "text-white" : "text-fontColor"}`}>
        <Link className='' to={href}>
        {name}
        </Link>
      </div>
    </div>
  )
}

export default SidebarItem
