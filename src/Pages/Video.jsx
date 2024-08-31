import React from 'react'
import Playvideo from '../Components/Playvideo'
import Recomd from '../Components/Recomd'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {vidoeId,categoryId} = useParams()
  return (
    <div className='play-cont  p-4 gap-3 flex'>
      <Playvideo videoId = {vidoeId}/>
      <Recomd categoryId={categoryId}/>
    </div>
  )
}

export default Video
