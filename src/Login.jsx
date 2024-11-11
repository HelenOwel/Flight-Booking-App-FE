import React, { useState, useRef } from 'react'
import Navbar from './Components/Navbar'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

function Login() {
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('')
 const navigate = useNavigate();



// const data = {
//   email, password
// }

const form = useRef(null) 
// useRef is for returning default form setting


const handleEmailChange = (event) => {
  setEmail(event.target.value)
}

const handlePasswordChange = (event) => {
  setPassword(event.target.value)
}
const handleLogin = () => {
  e.preventDefault();
  const checkStoredEmail = localStorage.getItem('email')
  const checkStoredPassword = localStorage.getItem('password')
  if( email ===  checkStoredEmail && password === checkStoredPassword  ){
    navigate('/')
  }else{
    alert('Invalid Email or Password')
  }
  form.current.reset()
}

  return (
    <div>
        <Navbar/>
       <Link to='/login'>
       <div className=' w-full md:w-[1200px] mx-auto'>
            <form ref={form} action="" className='pt-[200px]' onSubmit={handleLogin} >
                <div className='border mx-3  md:mx-auto  md:w-[50%] px-4'>
                <h1 className='text-3xl relative text-center'>MQ's Login</h1>
                <div className=' border-b md:left-[45%] font-bold border-green-800 md:w-[10%] absolute'></div>
                <div className='mt-7 space-y-3'>
                <label For="email" className='text-left text-xl'>Email</label><br />
                <input type="text" value={email} onChange={handleEmailChange} required className='border py-1 w-full rounded-md'  /> <br />

                </div>

                <div className='mt-8 space-y-3 mb-6'>
                <label For="password"  className=' text-xl'>Password</label><br />
                <input type="text" required value={password} onChange={handlePasswordChange} className='border py-1 w-full rounded-md focus:outline-blue-500 focus:ring-2 '   /> <br />
                </div>

                <div className='flex justify-between '>
               <p className='w-[50%] md:w-50% py-3 pt- '>  <Link to='/signUp' className='py-3 px-10 border mb-9 w-full bg-green-900 text-white rounded-md'>Or Sign Up</Link></p>


                    <button className='text-center text-white bg-[#080A5F] w-[50%] md:w-[60%] py-3 mb-8  rounded-md ' onSubmit={handleLogin}>Login</button>

                </div>
                </div>
            </form>
        </div>
       </Link>
    </div>
  )
}

export default Login