import React, { lazy } from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import { useRouter } from 'next/router'
function SearchCard(props) {
    // console.log(props)
    const router = useRouter();
  return (
    <div className=' md:h-[200px] h-[400px]  w-full shadow-blue-800 shadow-xl rounded-lg  bg-white bg-opacity-25 gap-2 flex flex-col md:flex-row items-center  '>
        <div className='  md:h-[190px]  m-0 md:ml-7 rounded-se-xl rounded-ss-xl md:rounded-xl  object-cover flex justify-center overflow-clip items-center'>
        <button onClick={()=>{router.push({pathname:"/components/Product" ,query:{id:props.videoId}})}}>
          <Image loading='lazy' src={props.thumbnail} alt='logo' height={300} width={350} />
          </button>
        </div>
        <div className='flex flex-col ml-4 items-start gap-3  '> 
            <h2 className='text-2xl'>{props.title.slice(0,25)}</h2>
            <h2>Date</h2>
            <div className='flex flex-row items-center gap-3 '>
                <div className='h-[40px] w-[40px] bg-black rounded-full'></div>
                <div>{props.channelTitle}</div>
            </div>
            <h2 className='text-sm'>{props.description.slice(0,85)}</h2>
        </div>
    </div>
  )
}

export default SearchCard