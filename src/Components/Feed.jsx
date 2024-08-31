import React, { useEffect, useState } from 'react'
import thum1 from '../../src/assets/thumbnail1.png'
import thum2 from '../../src/assets/thumbnail2.png'
import thum3 from '../../src/assets/thumbnail3.png'
import thum4 from '../../src/assets/thumbnail4.png'
import thum5 from '../../src/assets/thumbnail5.png'
import thum6 from '../../src/assets/thumbnail6.png'
import thum7 from '../../src/assets/thumbnail7.png'
import thum8 from '../../src/assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import {API_KEY, value_conveter} from '../../src/data'
import moment from 'moment'

const Feed = ({sidbar,category}) => {
const [data, setdata] = useState([])
  
  async function fetchData(){
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
  let response = await fetch(url);
  let urlData  = await response.json()
  setdata(urlData.items)
  }

 useEffect(() => {
 fetchData()
 console.log('hello')
 }, [category])
 
  return (
 <>
 <div className={`feed ${sidbar?'':'large-feed'}`}>
   {data.map((items)=>{
    return (
      <Link key={items.id} to={`Video/${items.snippet.categoryId}/${items.id}`} className="card cursor-pointer">
      <img className='rounded-md' src={items.snippet.thumbnails.medium.url} alt="" />
      <h3 className='font-semibold mt-1 mb-1'>{items.snippet.title}</h3>
      <h3 className='text-zinc-800 '>{items.snippet.channelTitle}</h3>
      <p>{value_conveter(items.statistics.viewCount)} views &bull; {moment(items.snippet.publishedAt).fromNow()}</p>
     </Link>
    )
   })}

   </div>
 </>
  )
}

export default Feed
