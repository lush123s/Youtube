import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'

function App() {
const [sidbar, setsidbar] = useState(true)
  return (
    <>
      <Navbar setsidbar={setsidbar} sidbar={sidbar}/>
      <Routes>
        <Route path='/' element={<Home sidbar={sidbar}/>} />
        <Route path='/Video/:categoryId/:vidoeId' element={<Video/>} />
      </Routes>
    </>
  )
}

export default App
