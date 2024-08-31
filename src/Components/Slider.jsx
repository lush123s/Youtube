import React from 'react'
import home from '../../src/assets/home.png'
import game from '../../src/assets/game_icon.png'
import automobile from '../../src/assets/automobiles.png'
import sport from '../../src/assets/sports.png'
import entertainment from '../../src/assets/entertainment.png'
import tech from '../../src/assets/tech.png'
import music from '../../src/assets/music.png'
import blog from '../../src/assets/blogs.png'
import news from '../../src/assets/news.png'
import jack from '../../src/assets/jack.png'
import simon from '../../src/assets/simon.png'
import tom from '../../src/assets/tom.png'
import megan from '../../src/assets/megan.png'
import camerone from '../../src/assets/cameron.png'



const Slider = ({sidbar,category,setcategory}) => {
  return (
   <>
   <div className={`sidbar ${sidbar?' w-[15%]':'w-[5%]'} bg-white fixed top-0 pl-4 pt-16 h-[100vh]`}>
    <div className="top">
        <div className="icon flex items-center mb-4 cursor-pointer"  onClick={function(){setcategory(0)}}>
            <img  className={category===0?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`} src={home} alt="" />
            <p className={`${sidbar?'':'none'}`}>Home</p>
        </div>
        <div className="icon flex items-center mb-4 cursor-pointer" onClick={function(){setcategory(20)}}>
            <img  className={category===20?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`} src={game} alt="" />
            <p className={`${sidbar?'':'none'}`} >Gaming</p>
        </div>
        <div className="icon flex items-center mb-4 cursor-pointer"onClick={function(){setcategory(2)}} >
            <img  className={category===2?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`} src={automobile} alt="" />
            <p className={`${sidbar?'':'none'}`} >Automobile</p>
        </div>
        <div className="icon flex items-center mb-4 cursor-pointer"onClick={function(){setcategory(17)}} >
            <img  className={category===17?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`} src={sport} alt="" />
            <p className={`${sidbar?'':'none'}`}>Sports</p>
        </div>
        <div className="icon flex items-center mb-4 cursor-pointer" onClick={function(){setcategory(24)}} >
            <img  className={category===24?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`} src={entertainment} alt="" />
            <p className={`${sidbar?'':'none'}`}>Entertainment</p>
        </div>
        <div className="icon flex items-center mb-4 cursor-pointer" onClick={function(){setcategory(28)}} >
            <img className={category===28?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`}  src={tech} alt="" />
            <p className={`${sidbar?'':'none'}`}>Technology</p>
        </div>
        <div className="icon flex items-center mb-4 cursor-pointer" onClick={function(){setcategory(10)}} >
            <img className={category===10?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`} src={music} alt="" />
            <p className={`${sidbar?'':'none'}`}>Music</p>
        </div>
        <div className="icon flex items-center mb-4 cursor-pointer" onClick={function(){setcategory(22)}}>
            <img className={category===22?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`} src={blog} alt="" />
            <p className={`${sidbar?'':'none'}`}>Blogs</p>
        </div>
        <div className="icon flex items-center mb-4 cursor-pointer" onClick={function(){setcategory(25)}}>
            <img className={category===25?`w-[25px] mr-[20px] border-2 border-b-red-600 pb-2`:`w-[25px] mr-[20px]`} src={news} alt="" />
            <p className={`${sidbar?'':'none'}`}>News</p>
        </div>
        <hr />
    </div>
    <div className="subcribed mt-2">
        <h3 className={`${sidbar?"":"none"} font-semibold text-zinc-600 mt-2 mb-2`}>Subscribed</h3>
        <div className="user flex items-center mb-3">
            <img className='w-[25px] mr-4 rounded-full' src={jack} alt="" />
            <p className={`${sidbar?'':'none'}`}>PewDiePie</p>
        </div>
        <div className="user flex items-center mb-3">
            <img className='w-[25px] mr-4 rounded-full' src={simon} alt="" />
            <p className={`${sidbar?'':'none'}`}>Mr.beast</p>
        </div>
        <div className="user flex items-center mb-3">
            <img className='w-[25px] mr-4 rounded-full' src={tom} alt="" />
            <p className={`${sidbar?'':'none'}`}>Justin Biebar</p>
        </div>
        <div className="user flex items-center mb-3">
            <img className='w-[25px] mr-4 rounded-full' src={megan} alt="" />
            <p className={`${sidbar?'':'none'}`}>Techno </p>
        </div>
        <div className="user flex items-center mb-3">
            <img className='w-[25px] mr-4 rounded-full' src={camerone} alt="" />
            <p className={`${sidbar?'':'none'}`}>Mythpat</p>
        </div>
    </div>
   </div>
   </>
  )
}

export default Slider
