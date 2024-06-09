import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='min-h-screen max-w-screen bg-main relative overflow-auto flex flex-col gap-3 items-center justify-center'>
    <h2 className='text-3xl text-fontColor'>
        Oopss! It seems this page doesn't exist
    </h2>
    <Link className='text-strokeBlue text-xl hover:text-buttonBgDark' to={"/home"}>Click to return home page</Link>
    </div>
  )
}

export default NotFound
