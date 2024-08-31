import React, { useEffect, useState } from 'react'
import thum1 from '../../src/assets/thumbnail1.png'
import thum2 from '../../src/assets/thumbnail2.png'
import thum3 from '../../src/assets/thumbnail3.png'
import thum4 from '../../src/assets/thumbnail4.png'
import thum5 from '../../src/assets/thumbnail5.png'
import thum6 from '../../src/assets/thumbnail6.png'
import thum7 from '../../src/assets/thumbnail7.png'
import thum8 from '../../src/assets/thumbnail8.png'
import {API_KEY, value_conveter} from '../../src/data'
import moment from 'moment'
import { Link } from 'react-router-dom'
const Recomd = ({categoryId}) => {
const [data, setdata] = useState([])
  async function recomdVideo(){
    let url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    let response = await fetch(url)
    let datas = await response.json()
    console.log(datas.items);
    setdata(datas.items)
  }
  useEffect(() => {
    recomdVideo()
  }, [])
  
  return (
    <>
    <div className='recomd-video '>
      {data.map(function(item){
        return  (<Link to={`/Video/${item.snippet.categoryId}/${item.id}`} className="video cursor-pointer flex mb-4">
        <img className='w-[180px] rounded-sm' src={item.snippet.thumbnails.medium.url} alt="" />
        <div className="bottom ml-2">
        <h4 className='font-semibold  w-44'>{item.snippet.title}</h4>
        <p>{item.snippet.channelTitle}</p>
        <p>{value_conveter(item.statistics.viewCount)} &bull; views</p>
        </div>
      </Link>)
     
      })}
  
    </div>
    </>
  )
}

export default Recomd
