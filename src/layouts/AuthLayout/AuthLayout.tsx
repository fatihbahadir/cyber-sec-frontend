import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
    <div className='w-screen bg-main text-white h-screen flex items-center justify-center'>
    <div className="bg-gradient-to-bl from-[#2B54E7] to-[rgba(255,255,255,0)] text-white p-[1px] rounded-xl shadow-lg"> 
        <div className='flex flex-col z-[1] bg-main rounded-xl relative gap-5 gradient-border px-8 '>
          <Outlet/>
        </div>
      </div>
    </div>
    </div>

  )
}

export default AuthLayout
