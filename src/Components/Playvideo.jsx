import React, { useEffect, useState } from 'react'
import video1 from '../../src/assets/video.mp4'
import like from '../../src/assets/like.png'
import dislike from '../../src/assets/dislike.png'
import share from '../../src/assets/share.png'
import save from '../../src/assets/save.png'
import jack from '../../src/assets/jack.png'
import user from '../../src/assets/user_profile.jpg'
import moment from 'moment'

import {API_KEY, value_conveter} from '../../src/data'
import { useParams } from 'react-router-dom'


const Playvideo = () => {
    const [apiData, setapiData] = useState('')
    const [channel, setchannel] = useState('')
    const [comment, setcomment] = useState([])
    const [Subcribe, setSubcribe] = useState(false)
    const {vidoeId} = useParams()
    async function channeldetails(){
        let url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        let response = await fetch(url)
        let channelData = await response.json()
         console.log(channelData.items[0])
         setchannel(channelData.items[0])
         // fetching comment data
         let commenturl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${vidoeId}&key=${API_KEY}`;
         let response2  = await fetch(commenturl);
         let commentdata = await response2.json();
          setcomment(commentdata.items)
    }

    async function Videodetails(){
        let Videurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidoeId}&key=${API_KEY}`;
        let response = await fetch(Videurl);
        let videodata = await response.json()
        //  console.log(videodata.items[0])
         setapiData(videodata.items[0])
    }
    useEffect(() => {
        Videodetails()
    }, [vidoeId])
    useEffect(() => {
        channeldetails()
    }, [apiData])
  return (
     <>
    <div className="playvidoe w-[65%] ">
        {/* <video className='w-screen' controls autoPlay muted src={video1}></video> */}
        <iframe className='w-[100%] h-[60vh]'  src={`https://www.youtube.com/embed/${vidoeId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3 className='mt-2 font-bold text-2xl'>{apiData?apiData.snippet.title:'Title'}</h3>
        <div className="info mb-4 flex mt-2 justify-between">
            <p>{apiData?value_conveter(apiData.statistics.viewCount):'15k'} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():''}</p>
            <div className="img flex gap-5">
                <span className='flex gap-3 items-center'><img className='w-6' src={like} alt="" />{apiData?value_conveter(apiData.statistics.likeCount):''}</span>
                <span className='flex gap-3 items-center'><img className='w-6' src={dislike} alt="" /></span>
                <span className='flex gap-3 items-center'><img className='w-6' src={share} alt="" />Share</span>
                <span className='flex gap-3 items-center'><img className='w-6' src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="channel mt-4 flex justify-between items-center">
             <div className="left flex">
                <img className='w-[45px] mr-3 rounded-full' src={channel?channel.snippet.thumbnails.default.url:''} alt="" />
                <div>
                <p className='font-semibold'>{apiData?apiData.snippet.channelTitle:''}</p>
                <p className='text-sm'>{channel?value_conveter(channel.statistics.subscriberCount):'1m'} Subcribers</p>
                </div>
             </div>
             <div className="right">
                <button onClick={function(){console.log(Subcribe===false?true:false)}} className={`${Subcribe===false?'bg-red-600 text-white':'bg-slate-700 text-black'} font-semibold py-2 px-5 mr-4 rounded-3xl cursor-pointer`}>Subcribe</button>
             </div>
        </div>
        <div className="descritpion mt-4 pl-16">
           <p>{apiData?apiData.snippet.description:''}</p>
            <hr />
            <h3 className='mt-3 text-lg mb-3'>{apiData?value_conveter(apiData.statistics.commentCount):102} Comments</h3>
            {comment.map(function(item){
                return  <div className="comments mb-7 flex items-start">
                <img className='w-[30px] rounded-full mr-3' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <div>
                <h3 className='font-semibold mb-1'>{item.snippet.topLevelComment.snippet.authorDisplayName} &bull;<span className='text-sm font-normal'> 1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-likes mt-1 flex items-center ">
                    <img className='w-[20px]' src={like} alt="" />
                    <span className='mr-4 text-sm ml-1 text-slate-500'>{value_conveter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img className='w-[20px]' src={dislike} alt="" />
                </div>
                </div>
            </div>
            })}
    
           
            
            
        </div>
    </div>
     </>
  )
}

export default Playvideo
