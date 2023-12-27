import React, {useState} from 'react'
import { navLinks } from '../constants/constants'
import { NavLink, Link } from 'react-router-dom'
import { Logo, Menu } from '../assets'

const Footer = () => {

    const [active, setActive] = useState('home')
    const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full bg-background border-b-[1px] border-active px-6 sm:px-16 items-center justify-between flex py-8'>
      <div className='w-full'>
        <Link to={'/'}>
          <img src={Logo}  />
        </Link>
      </div>

      <ul className='list-none w-full flex gap-2 hidden sm:flex'>
        {navLinks.map((link) =>(
          <NavLink to={link.path}>
            <li key={link.id} onClick={() => setActive(link.id)} className={` ${ active === link.id ? 'bg-active text-primary' : 'bg-none text-white' } font-inter p-3 rounded-md cursor-pointer hover:bg-active`}>
                {link.label}
            </li>
          </NavLink>
        ))}
      </ul>

      <div className='rounded-sm hidden sm:flex items-center justify-end w-full'>
        <Link to={'/contact'}>
          <button className='bg-primary py-3 px-5 rounded-md font-inter'>
            Contact Us
          </button>
        </Link>
      </div>

      <div className={`${toggle ? 'bg-primary' : 'bg-none'} flex relative p-2 rounded-md sm:hidden space-x-4`}>
        <img onClick={() => setToggle(!toggle)} src={Menu} className={``} />

          <div id='mobile-menu' className={`${toggle ? 'flex' : 'hidden'} flex-col absolute w-[250px] bg-background rounded-lg border-t-2 border-b-2 border-primary py-8`}>
            <ul className='list-none w-full w-full flex flex-col gap-2 sm:hidden'>
              {navLinks.map((link) =>(
                <NavLink to={link.path}>
                  <li key={link.id} onClick={() => setActive(link.id)} className={` ${ active === link.id ? 'bg-active text-primary font-bold' : 'bg-none text-white' } w-full font-inter py-3 px-8 rounded-md cursor-pointer hover:bg-active`}>
                      {link.label}
                  </li>
                </NavLink>
              ))}
            </ul>
            <Link to={'/contact'}>
              <button className='bg-primary ml-8 mt-8 py-3 px-5 rounded-md font-inter'>
                Contact Us
              </button>
            </Link>
          </div>
      </div>
    </nav>
  )
}

export default Footer