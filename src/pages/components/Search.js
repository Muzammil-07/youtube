import React from 'react'
import { useRouter } from 'next/router'
import SearchCard from './SearchCard';
import axios from 'axios';
import { useState,useEffect } from 'react';
import {setCookie} from 'cookies-next'

const Search = () => {
    const router = useRouter();
    var item = router.query.search;
    // console.log(router.query.search)
    const [state, setState] = useState(false);
    const [product, setProduct] = useState([])
    const [view, setView] = useState(<div>Hello World</div>)

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
                    setView(<div className='flex flex-col gap-2 '>
                        {arr.map((doc, index) => {
                            return (

                                <SearchCard key={index} thumbnail={doc.snippet.thumbnails.medium.url} title={doc.snippet.title} videoId={doc.id.videoId}
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
        <div className='grid grid-cols-[180px_1fr] grid-rows-[80px_1fr]' >
            <div className='col-span-2  h-[100vh]'>

            </div>
            <div className='col-span-1 row-span-1'></div>
            <div className='col-span-1 row-span-1 p-4'>
                {view}
            </div>
        </div>
    )
}

export default Search