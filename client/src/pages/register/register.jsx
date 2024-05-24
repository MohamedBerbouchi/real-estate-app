import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosClient from '../../lib/axiosClient'
import './register.scss'
function Register() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    setError('')
    const formData = new FormData(e.target);
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
   try{
    const res  = await axiosClient.post('/auth/register',{
      username, email, password
    })
    console.log(res)
    navigate('/login')
   }catch(err){
    console.log(err)
    setError(err.response.data.message)
   }finally{
    setLoading(false)
   }
  }
  return (
    <div className="register">
      <div className="left">
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='username...' />
        <input type="text" name='email' placeholder='email...' />
        <input type="password" name='password' placeholder='password...' />
        <button disabled={loading} type="submit">register</button>
        {error && <span>{error}</span>}

        <Link to={'/login'} className='link'>
          Do you  have an account?
        </Link>
      </form>
      </div>
      <div className="right">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Register
