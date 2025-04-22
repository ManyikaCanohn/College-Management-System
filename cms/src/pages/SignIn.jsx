import { useState } from 'react'

const SignIn = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNmuber] = useState('');
  const [password, setPassword] = useState('');


  function handleSignIn(){

    if(fullName === '' || email === '' || contactNumber === '' || password === ''){
      alert('Please fill all the Fields!')
    }
  }
  return (
    <div className='signin-div'>

      <main className='signin-container'>

            <header>Sign In</header>
            <input type="text" placeholder='Full Name' onChange={(event) => setFullName(event.target.value)} required /> <br />
            <input type="text" placeholder='Email Address' onChange={(event) => setEmail(event.target.value)} required /> <br />
            <input type="number" placeholder='Contact Number' onChange={(event) => setContactNmuber(event.target.value)} required /> <br />
            <input type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} required /> <br />
            <p>Already have an account? <a href="/login">Login </a></p>
            <button className='sign-button' onClick={handleSignIn}>Sign In</button>
      </main>
    </div>
  )
}

export default SignIn