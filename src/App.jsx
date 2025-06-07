import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'

import Header from './components/header.jsx'

import Home from './pages/Home.jsx'
import Ourschool from './pages/Ourschool.jsx'
import Missionvision from './pages/Missionvision.jsx'
import Ourpedagogy from './pages/Ourpedagogy.jsx'
import Presidentmass from './pages/Presidentmass.jsx'
import Vicepresidentmess from './pages/Vicepresidentmess.jsx'
import Managementteam from './pages/Managementteam.jsx'
import Studentleadership from './pages/Studentleadership.jsx'
import Admissionprocess from './pages/Admissionprocess.jsx'
import Queriesabout from './pages/Queriesabout.jsx'
import Onlineragistration from './pages/Onlineragistration.jsx'
import Testdateresult from './pages/Testdateresult.jsx'
import Feestructure from './pages/Feestructure.jsx'
import Curriculum from './pages/Curriculum.jsx'

import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
      <Header />

      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/ourschool" element={<Ourschool/>}></Route>
      <Route path="/Missionvision" element={<Missionvision/>}></Route>
      <Route path="/ourpedagogy" element={<Ourpedagogy/>}></Route>
      <Route path="/presidentmass" element={<Presidentmass/>}></Route>
      <Route path="/vicepresidentmess" element={<Vicepresidentmess/>}></Route>
      <Route path="/managementteam" element={<Managementteam/>}></Route>
      <Route path="/studentleadership" element={<Studentleadership/>}></Route>
      <Route path="/admissionprocess" element={<Admissionprocess/>}></Route>
      <Route path="/queriesabout" element={<Queriesabout/>}></Route>
      <Route path="/onlineragistration" element={<Onlineragistration/>}></Route>
      <Route path="/testdateresult" element={<Testdateresult/>}></Route>
      <Route path="/feestructure" element={<Feestructure/>}></Route>
      <Route path="/curriculum" element={<Curriculum/>}></Route>
      </Routes>

      <Footer/>
      

    </>
  )
}

export default App
