import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'
function Register() {
  return (
    <div className="home">
      <div className="left">
      <h1>Create an account</h1>
      <form>
        <input type="text" placeholder='username...' />
        <input type="text" placeholder='email...' />
        <input type="password" placeholder='password...' />
        <button type="submit">register</button>
        <span>Invalid</span>

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
