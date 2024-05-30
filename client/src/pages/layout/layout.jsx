import React from 'react'
import Navbar from '../../components/navbar/nav'
import './layout.scss'

import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div className='layout'>
      <div className="navbar">
        <Navbar />
      </div>
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
