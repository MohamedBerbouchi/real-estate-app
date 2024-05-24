import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
import axiosClient from '../../lib/axiosClient'
function Login() {
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
  async function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')
    setError('')
    setLoading(true)
    try{
      const res = await axiosClient.post('/auth/login', {
        username, password
      })
      console.log(res)

    }catch(err){
      console.log(err)
      setError(err.response.data.message)
    }finally{
      setLoading(false)
    }
  }
  console.log(error)
  return (
    <div className="login">
      <div className="left">
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit}>
        <input name='username' type="text" placeholder='username...' />
        <input name='password' type="password" placeholder='password...' />
        <button disabled={loading} type="submit">Login</button>
        {error && <span>{error}</span>}

        <Link to={'/register'} className='link'>
          Dont have an account?
        </Link>
      </form>
      </div>
      <div className="right">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Login
