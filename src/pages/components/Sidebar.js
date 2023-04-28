import React from 'react'
import { hasCookie ,getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = useRouter();
    return (
 <div className='fixed flex justify-center flex-col items-center h-[100vh]  top-0 w-[160px]  -z-2'>
   <h1 className='text-xl mb-2'> Catogaries</h1>
   <div className='flex flex-col justify-center gap-y-3'>
    <button className='bg-black w-[100px] h-[44px] text-white' onClick={()=>{router.push({pathname:'/components/Search',query:{search:'trending'}}) }} >Trending</button>
    <button className='bg-black w-[100px] h-[44px] text-white'  onClick={()=>{router.push({pathname:'/components/Search',query:{search:'gaming'}}) }} >Gaming</button>
    <button className='bg-black w-[100px] h-[44px] text-white'  onClick={()=>{router.push({pathname:'/components/Search',query:{search:'music'}}) }} >Music</button>
    <button className='bg-black w-[100px] h-[44px] text-white'  onClick={()=>{router.push({pathname:'/components/Search',query:{search:'sports'}}) }} >Sports</button>
    <button className='bg-black w-[100px] h-[44px] text-white'  onClick={()=>{router.push({pathname:'/components/Search',query:{search:'news'}}) }} >News</button>
    <button className='bg-black w-[100px] h-[44px] text-white'  onClick={()=>{router.push({pathname:'/components/Search',query:{search:'movies'}}) }} >Movies</button>
    <button className='bg-black w-[100px] h-[44px] text-white'  onClick={()=>{router.push({pathname:'/components/Search',query:{search:'science'}}) }} >Science</button>
   </div>
 </div>
    )
}

export default Sidebar