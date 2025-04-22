import React, { useState } from 'react'
import Dashboard from '../dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';

const Login = ({setToken}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  function handleButton(){

    if(email === '' || password === ''){
      alert("Please enter details")
      return
    }

    setToken(1234)

    const user = {
      email,
      password
    }

    navigate("/dashboard")




  }
  
  return (

    <main className='login-container'>

        <div className='login-div'>
        <h5>Log In</h5>
        <input type="text" placeholder='Email Address' onChange={(event) => setEmail(event.target.value)} /><br />
        <input type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} /><br />
        <p>Forgot Password! <a href='/dashboard'>Click</a></p>
        <button onClick={handleButton} className='login-button'>Log In</button>
        </div>
        
    </main>

  )
}

export default Login