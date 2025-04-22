// import React, { use } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {

    const quickview = useNavigate();
    
    return (

        <nav className='nav-bar'>

            <header>CoDeiT Academy</header>
            <ul>
                <NavLink to= '/'><li>Home</li></NavLink>
                <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                <NavLink to='/signin'><li>Sign In</li></NavLink>
                <NavLink to='/login'><li>Log In</li></NavLink>
                <NavLink to='/applicationform'><li>Application Form</li></NavLink>
            </ul>
            <button onClick={() => quickview('/quickview')}>Quick Overview</button>

        </nav>
    )
}

export default NavigationBar