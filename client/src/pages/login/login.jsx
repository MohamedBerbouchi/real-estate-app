import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import axiosClient from '../../lib/axiosClient'
import { AuthContext } from '../../context/AuthContext'
function Login() {
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const navigate = useNavigate()
const { setUser} = useContext(AuthContext)

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
      setUser(res.data)
      navigate('/')
    }catch(err){
      setError(err.response.data.message)
    }finally{
      setLoading(false)
    }
  }
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
