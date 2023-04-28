import React, { lazy } from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import { useRouter } from 'next/router'
function SearchCard(props) {
    // console.log(props)
    const router = useRouter();
  return (
    <div className='h-[300px] border border-spacing-3 border-black bg-black flex items-center  '>
        <div className=' h-[190px] w-[350px]  ml-7 rounded-xl object-cover flex justify-center overflow-clip items-center'>
        <button onClick={()=>{router.push({pathname:"/components/Product" ,query:{id:props.videoId}})}}>
          <Image loading='lazy' src={props.thumbnail} alt='logo' height={200} width={350} />
          </button>
        </div>
        <div className='flex flex-col ml-4 items-start gap-3 '> 
            <h2 className='text-2xl'>{props.title}</h2>
            <h2>Date</h2>
            <div className='flex flex-row items-center gap-3 '>
                <div className='h-[40px] w-[40px] bg-black rounded-full'></div>
                <div>{props.channelTitle}</div>
            </div>
            <h2 className='text-sm'>{props.description}</h2>
        </div>
    </div>
  )
}

export default SearchCard