import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useRouter } from 'next/router'
const Layout = ({children}) => {
  const [route,setRoute]=useState(false)
  const router = useRouter();
  // console.log(router)
  useEffect(()=>{
    setRoute(false)
        if (router.pathname == "/components/Product")
        {
       setRoute(true)
        }
  
      },[{router}])
  return (
    <div className=''>
    <Navbar/>

     {route?<></>:<Sidebar/>} 
    {children}
    </div>
  )
}

export default Layout