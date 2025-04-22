
import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import SignIn from './pages/SignIn.jsx'
import Home from './pages/Home.jsx'
import NavigationBar from './navagationbar/NavigationBar.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import Quickview from './navagationbar/Quickview.jsx'
import Business from './programs/Business.jsx'
import Health from './programs/Health.jsx'
import Education from './programs/Education.jsx'
import Media from './programs/Media.jsx'
import OpenDistance from './programs/OpenDistance.jsx'
import ApplicationForm from './pages/ApplicationForm.jsx'

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
    
    {token && <NavigationBar />}

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/signin' element={<SignIn /> } />
        <Route path='/login' element={ <Login setToken={setToken}/> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/quickview' element={ <Quickview /> } />
        <Route path='/business' element={ <Business /> } />
        <Route path='/health' element={ <Health /> } />
        <Route path='/education' element={ <Education /> } />
        <Route path='/media' element={ <Media /> } />
        <Route path='/opendistance' element={ <OpenDistance /> } />
        <Route path='/applicationform' element={ <ApplicationForm /> } />
      </Routes>
      
    </div>
  )
}

export default App