import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cards from './Cards';






const Dashboard = (props) => {
    const [state, setState] = useState(false);
    const [product, setProduct] = useState([])
    const [ view ,setView ]=useState(<div>Hello World</div>)
    
    var relate='7ghhRHRP6t4'
    var arr = [];
    console.log(props.related,"change")
    useEffect(() => {
        let unsub = true;
        if (unsub) {
            if(props.related){
                relate=props.related;
            }
            const getData = async () => {

                const options = {
                    method: 'GET',
                    url: 'https://youtube-v31.p.rapidapi.com/search',
                    params: {
                        relatedToVideoId: relate,
                        part: 'id,snippet',
                        type: 'video',
                        maxResults: '50'
                    },
                    headers: {
                        'content-type': 'application/octet-stream',
                        'X-RapidAPI-Key': process.env.API_KEY,
                        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
                    }
                };

                try {
                    const response = await axios.request(options);
                    // console.log(response.data);
                    arr = response.data.items;



                    console.log(arr, 'ar')

                    setState(true);
                    setView(<div className='flex flex-wrap gap-2 '>
                        {arr.map((doc,index)=>{
                            return(
                               
                       <Cards key={index} thumbnail={doc.snippet.thumbnails.medium.url} title={doc.snippet.title} videoId={doc.id.videoId}/>
                     
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


    }, [props])
    // console.log(data)

    if (!state) {
        return (
            <div>Hello</div>)
    }
    return (

        <div className='p-0'>
         
              {
               view
              }
        </div>
    )
}



export default Dashboard