import React, { useContext } from 'react'
import Navbar from '../../components/navbar/nav'
import './layout.scss'

import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
function AuthLayout() {
  const {user} = useContext(AuthContext)
  console.log(user)
  if(!user){
   
    return  <Navigate to="/login" />
  }else{
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
 
}

export default AuthLayout
