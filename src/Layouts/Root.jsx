import React from 'react'
import NavBar from '../Components/Shared/NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Components/Shared/Footer/Footer'

function Root() {
  return (
    <div className='bg-[#050414] h-screen w-full'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]
        [mask-img:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'>

        </div>
        <div className='relative pt-20'>
       <NavBar/>
       <Outlet/>
       <Footer/> 
    </div>
    </div>
  )
}

export default Root