import React from 'react'
import { useRouter } from 'next/router'
import SearchCard from './SearchCard';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {setCookie} from 'cookies-next'
import { ClipLoader } from 'react-spinners';

const Search = () => {
    const router = useRouter();
    var item = router.query.search;
    // console.log(router.query.search)
    const [state, setState] = useState(false);
    const [product, setProduct] = useState([])
    const [view, setView] = useState(<div className='flex justify-center items-center'><ClipLoader loading={true} size={150}
    aria-label="Loading Spinner"
    data-testid="loader" /></div>)

    var arr = [];
   

    useEffect(() => {
        let unsub = true;
        if (unsub) {
        
   
            const getData = async () => {

                const options = {
                    method: 'GET',
                    url: 'https://youtube-v31.p.rapidapi.com/search',
                    params: {
                      q: item,
                      part: 'snippet,id',
                      regionCode: 'US',
                      maxResults: '50',
                      order: 'date'
                    },
                    headers: {
                        'content-type': 'application/octet-stream',
                        'X-RapidAPI-Key':process.env.API_KEY,
                        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                    }
                };

                try {
                    const response = await axios.request(options);
                    // console.log(response.data);
                    arr = response.data.items;

                    setCookie('relatedVideo',arr[0].id.videoId)

                    // console.log(arr, 'ar')

                    setState(true);
                    setView(<div className='flex flex-col gap-2  justify-center items-center'>
                        {arr.map((doc, index) => {
                            var a= doc.snippet.title;
                   
                            
                            return (

                                <SearchCard key={index} thumbnail={doc.snippet.thumbnails.medium.url} title={a} videoId={doc.id.videoId}
                                channelTitle={doc.snippet.channelTitle} description={doc.snippet.description} />

                            )
                        })}
                    </div>)

                } catch (error) {
                    console.error(error);
                }
            }

            getData()
        }
        return () => unsub = false


    }, [router.query])

    return (
        <div className='grid grid-cols-[1fr]  mt-20 md:mt-0 md:grid-cols-[180px_1fr] grid-rows-[1fr] md:grid-rows-[80px_1fr]' >
            <div className='col-span-2 hidden md:block'>

            </div>
            <div className='col-span-1 row-span-1 hidden md:block'></div>
            <div className='p-1 md:p-4  '>
                {view}
            </div>
        </div>
    )
}

export default Search