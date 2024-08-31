import React, { useState } from 'react'
import Slider from '../Components/Slider'
import Feed from '../Components/Feed'

const Home = (props) => {
  const [category, setcategory] = useState(0)
  return (
    <>
    <Slider category={category} setcategory={setcategory} sidbar={props.sidbar}/>
    <Feed  category={category} setcategory={setcategory} sidbar={props.sidbar}/>
    </>
  )
}

export default Home
