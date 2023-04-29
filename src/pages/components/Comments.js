import React from 'react'
import CommentCard from './CommentCard'
import axios from 'axios';
import { useState,useEffect } from 'react';

const Comments = (props) => {
  const [state, setState] = useState(false);
  const [product, setProduct] = useState([])
  const [ view ,setView ]=useState(<div>Hello World</div>)
  
  var relate='7ghhRHRP6t4'
  var arr = [];
  // console.log(props.related,"change")
  useEffect(() => {
      let unsub = true;
      if (unsub) {
          if(props.related){
              relate=props.related;
          }
          const getData = async () => {

            const options = {
              method: 'GET',
              url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
              params: {
                part: 'snippet',
                videoId: relate,
                maxResults: '100'
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



                  // console.log(arr, 'ar')

                  setState(true);
                  setView(<div className='flex flex-col gap-2'>
                      {arr.map((doc,index)=>{
                        if(index<50){
                          return
                        }
                          return(
                             
                     <CommentCard key={index} title={doc.snippet.topLevelComment.snippet.textDisplay} 
                     channel={doc.snippet.topLevelComment.snippet.authorDisplayName}
                     url={doc.snippet.topLevelComment.snippet.authorProfileImageUrl}
                     likes={doc.snippet.topLevelComment.snippet.likeCount}/>
                   
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



  return (
    <div className='w-full hidden md:block'>
      <div>
        <label>Add Comments</label>
        <input type='text' className='bg-transparent border-b-4 border-black w-96 p-2  '/>
        <div className='py-4'>
          {/* <CommentCard/> */}
          {view}
        </div>
      </div>
    </div>
  )
}

export default Comments