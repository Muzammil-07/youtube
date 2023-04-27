import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Layout from './Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 
      <div className=" grid  grid-cols-[1fr_7fr] mt-20 ">
        <div className='col-span-1 h-72  '>
      
        </div>
        <div className='col-span-1 '>
          <Dashboard />
        </div>
      </div>
  
  )
}
