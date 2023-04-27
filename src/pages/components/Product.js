import Layout from '../Layout'
import React from 'react'
import { useRouter } from 'next/router';
import Related from './Related';

const Product = () => {
  const router = useRouter();
  // console.log(router.query.id)
  return (
    <Layout>
      <div className='grid grid-rows-[420px_1fr] grid-cols-[2fr_1fr] mt-20'>
        <div className=' row-span-1 px-20 '>
          <iframe width="760" height="420" src={`https://www.youtube.com/embed/${router.query.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className=' row-span-2 flex justify-center   w-96'>
<Related related={router.query.id}/>
        </div>
        <div>

        </div>
      </div>
    </Layout>
  )
}

export default Product