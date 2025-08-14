import React from 'react'
import NavBar from '../Components/Shared/NavBar/NavBar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Components/Shared/Footer/Footer'
import BlurBlob from '../Components/BlurBlob'
import Loader from '../Components/Loader'

function Root() {
const state = useNavigation();
  return (
    <div className='bg-[#050414] min-h-screen '>

    <BlurBlob
          position={{ top: '30%', left: '15%' }}
          size={{ width: '30%', height: '20%' }}
          colors={['#CBCBD1', '#1D5861']}
          
        >
  
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0">
      </div>
</BlurBlob>
{state=="loading" ? <Loader/> : 
<div className='relative z-0'>
       <NavBar/>
       <Outlet/>
       <Footer/> 
    </div>}
        
    </div>
  )
}

export default Root