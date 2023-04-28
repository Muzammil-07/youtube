import React from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'
const Cards = (props) => {
    // console.log(props.thumbnail)
   const router = useRouter()
    return (
        <div key={props.index} className='h-[300px] w-[380px] flex  flex-col items-center bg-black  rounded-md  gap-2 shadow-xl '>
            <button onClick={()=>{router.push({pathname:"/components/Product" ,query:{id:props.videoId,title:props.title}})}}>
            <Image alt='img' src={props.thumbnail} width={450} height={200} className='object-fill rounded-md object-top' />
            </button>
            <div className='flex justify-evenly items-center w-full mt-1'>
                <div className='bg-slate-600 h-[40px] w-[40px] rounded-full text-center '>
                    a
                </div>
                <p className=' w-72 text-sm text-justify p-2 '>{props.title}</p>
            </div>



        </div>
    )
}

export default Cards