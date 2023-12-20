import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className='flex w-full flex-col'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout