import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import CheckIn from './CheckIn'
import CheckUs from './CheckUs'
import Signup from './Signup'

import 'aos/dist/aos.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/checkIn' element={<CheckIn/>}/>
        <Route path='/checkUs' element={<CheckUs/>}></Route>
        <Route path='/signUp' element={<Signup/>}></Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App