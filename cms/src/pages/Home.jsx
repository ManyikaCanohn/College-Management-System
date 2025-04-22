import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigateSignin = useNavigate();
  const navigateLogin = useNavigate();

  return (
    <div className='home-div'>
      {/* <header className='home-div-header'>Welcome to CodeIt Academy</header> */}
        <h1>CodeIt Academy</h1>
        <div>
          <button onClick={() => navigateSignin('/signin')}>Sign In</button>
          <button onClick={() => navigateLogin('/login')}>Log In</button>
        </div>
    </div>
  )
}

export default Home