import React from 'react'

const Navbar = () => {
  return (
    <div className='h-20 mx-auto  w-full flex justify-between px-10 md:px-32 bg-blue-200  m-0'>
      <div className='flex items-center '>
        <h1 className='font-medium md:font-semibold  md:text-base'>iTask - Get things Done!  </h1>
      
       
      </div>
      <div className='flex items-center  lg:gap-10'>

        <span className=' cursor-pointer text-xs md:w-32 text-center hover:bg-green-300 transition-all duration-500 p-1  rounded-3xl hover:font-bold md:text-xs' >Home</span>
        <span className='cursor-pointer text-xs md:w-40 text-center hover:bg-green-300 transition-all duration-500 p-1  rounded-3xl hover:font-bold  md:text-xs'>Your Tasks</span> </div>

    </div>
  )
}

export default Navbar
