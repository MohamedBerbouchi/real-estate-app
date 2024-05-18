import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
function Navbar() {
  return (
    <nav>
      <div className="left">
          <Link to='/' className="logo link">
            <img src="/logo.png" alt="" />
            <span>MinaEstate</span>
          </Link>
          <Link to='/'  className='link'>
            Home
          </Link>
          <Link to='/' className='link'>
            About
          </Link>
          <Link to='/' className='link'>
            Contact
          </Link>
          <Link to='/' className='link'>
            Agents
          </Link>
      </div>
      <div className="right">
          <button>Sign in</button>
          <button>Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar
