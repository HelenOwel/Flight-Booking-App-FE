import Navbar from './Components/Navbar'
import {Link} from 'react-router-dom'
import Footer from './Components/Footer'


function Signup() {

  // const [email, setEmail]= useState('')
  // const [password, setPassword]= useState('')
  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value)
  // }
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value)
  // }
  // const handleLogin = () =>{
  //   e.preventDefault();
  //   const checkStoredEmail = localStorage.getItem('email')
  //   const checkStoredPassword = localStorage.getItem('password')
  //   if(email === checkStoredEmail && password === checkStoredPassword)
  //   {Navigate, '/'}

  //   c
  // }

  return (
    <div>
      <Navbar/>
<div className=' pt-[150px] w-[80%] mx-auto justify-center items-center '>
<form className='border px-8 py-6 mb-6 rounded-md' >
<h1  className='text-black text-center text-2xl'>Create an account</h1>
<p className=' text-center text-xl text-black'>Have an account? Click to <Link to='/Login' className='underline font-sans text-blue-700 text-xl'>Login</Link></p>
<div className=' space-y-4 text-blue-400 '>
  
<p className='text-center '><input type="text" placeholder='Username' className=' text-left border w-[80%] md:w-[50%] rounded-md py-2  mt-8 px-3 '  /></p>
<p className='text-center'><input type="text" placeholder='Email'   className='  text-left border w-[80%] md:w-[50%] rounded-md  py-2 px-3 ' /></p>
<p className='text-center'><input type="text" placeholder='Password'   className='  text-left border w-[80%] md:w-[50%] rounded-md  py-2 px-3 ' /></p>
<p className='text-center'><input type="text" placeholder='Confirm Password'  className='  text-left border w-[80%] md:w-[50%] rounded-md  py-2 px-3'  /></p>
<p className='text-center'><button className=' text-center w-[80%] md:w-[50%]  rounded-md py-2 bg-blue-950  text-white' >Register</button></p>

</div>
</form>
</div>

    
     
        <Footer/>
    </div>
    
  )
}

export default Signup