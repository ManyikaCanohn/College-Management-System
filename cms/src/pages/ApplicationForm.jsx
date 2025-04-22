import React from 'react'
import { useState } from 'react'

const ApplicationForm = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);
    const [other, setOther] = useState(false);
    const [address, setAddress] = useState('');
    
    return (
        <main className='application-form'>
            <header className='application-form-header'>Application Form</header>
            <form className='application-form-body'>
                <div>
                    <label for='name'>Full Name</label>
                    <br />
                    <input type="text" id="name" onChange={(event) => setFullName(event.target.value) } className='appInput' />
                </div>

                <div>
                    <label for='address'>Address</label>
                    <br />
                    <input type="text" id='address' onChange={(event) => setAddress(event.target.value)} className='appInput' />
                </div>

                <div>
                    <label for='Email'>Email</label>
                    <br /> 
                    <input type="email"  id='Email' onChange={(event) => setEmail(event.target.value)} className='appInput' />
                </div>

                <div>
                    <label for='phone'>Phone Number</label>
                    <br />
                    <input type="number" id='phone' onChange={(event) => setPhone(event.target.value)} className='appInput' />
                </div>

                <div>
                    <label for='password'>Password</label>
                    <br />
                    <input type="password" id='password' onChange={(event) => setPassword(event.target.value)} className='appInput' />
                </div>

                <div>
                    <label for='comfirmpassword'>Comfirm Password</label>
                    <br />
                    <input type="password" id='confirmpassword' onChange={(event) => setConfirmPassword(event.target.value)} className='appInput' />
                </div>

                <div className='radio-div'>
                    <label for='male'>Male</label>
                    <input type="radio"  id='male' onChange={(event) => setMale(event.target.value)} />

                    <label for='female'>Female</label>
                    <input type="radio"  id='female' onChange={(event) => setFemale(event.target.value)} />

                    <label for='others'>Others</label>
                    <input type="radio"  id='others' onChange={(event) => setOther(event.target.value)}/>
                </div>

                <button type='button' className='btn btn-primary'>Register</button>
            </form>

            <p>&copy; 2025 CodeIt Academy | All Rights Revesed</p>
        </main>
    )
}

export default ApplicationForm