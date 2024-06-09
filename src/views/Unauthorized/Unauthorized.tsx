import React from 'react'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div className='min-h-screen max-w-screen bg-main relative overflow-auto flex flex-col gap-3 items-center justify-center'>
    <h2 className='text-3xl text-fontColor'>
        Oopss! You don't have permission to see this page. Please contact system administrator.
    </h2>
    <Link className='text-strokeBlue text-xl hover:text-buttonBgDark' to={"/login"}>Click to return login page</Link>
    </div>
  )
}

export default Unauthorized
