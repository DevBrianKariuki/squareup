import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className='font-inter'>Navbar</div>
      <Outlet />
    </div>
  )
}

export default Layout