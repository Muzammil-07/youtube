import Layout from '../Layout'
import React from 'react'
import { useRouter } from 'next/router';
import Related from './Related';
import Comments from './Comments';

const Product = () => {
  const router = useRouter();
  // console.log(router.query.id)
  return (
    <Layout>
      <div className='grid grid-rows-[250px] md:grid-rows-[420px_1fr] grid-cols-1 md:grid-cols-[2fr_1fr] mt-20'>
        <div className=' row-span-1 p-1 col-span-1 flex justify-center '>
          <iframe className='w-96 md:w-[760px] h-[220px] md:h-[420px]' src={`https://www.youtube.com/embed/${router.query.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='col-span-1 flex justify-center  '>
          <Related related={router.query.id} />
        </div>
        <div>
          <div className='px-20 pt-4 hidden'>
            <h1 className='text-xl'>{router.query.title}</h1>
            <div className='pt-2 flex  justify-evenly w-72 items-center'>
              <div className='h-[50px] w-[50px] bg-slate-500 '></div>
              <div>
                <div className='text-xl font-bold'>channelTitle</div>
                <div className='text-sm'>1.4m subscriber</div>
              </div>
              <div><button className='btn bg-slate-950 w-[80px] h-[40px] rounded-xl text-white'>Subscribe</button></div>
            </div>
          </div>
          <div className='px-20 pt-8 '>
            <Comments related={router.query.id} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product