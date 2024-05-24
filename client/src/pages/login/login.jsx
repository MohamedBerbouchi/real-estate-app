import React from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
function Login() {
  return (
    <div className="home">
      <div className="left">
      <h1>Welcome Back</h1>
      <form>
        <input type="text" placeholder='username...' />
        <input type="password" placeholder='password...' />
        <button type="submit">Login</button>
        <span>Invalid</span>

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
