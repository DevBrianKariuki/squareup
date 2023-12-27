import React, {useState} from 'react'
import { navLinks } from '../constants/constants'
import { NavLink, Link } from 'react-router-dom'
import { Logo, Menu } from '../assets'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {

    const [active, setActive] = useState('home')
    const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full bg-background border-b-[1px] border-active px-6 sm:px-16 items-center flex-col flex py-8'>
      <div className='flex flex-col w-full items-center gap-12 justify-center md:justify-between md:flex-row'>
        <div className='w-full iems-center justify-center'>
            <Link to={'/'}>
            <img src={Logo} className='w-[40%]' />
            </Link>
        </div>

        <ul className='list-none grid grid-cols-2 md:grid-cols-6 w-full gap-3'>
            {navLinks.map((link) =>(
            <NavLink to={link.path}>
                <li key={link.id}  className={`text-white font-barlow p-3 text-md rounded-md cursor-pointer hover:text-primary`}>
                    {link.label}
                </li>
            </NavLink>
            ))}
        </ul>

        <div className='rounded-lg border-[1px] border-active py-3 gap-3 flex justify-center items-center w-full'>
            
        <p className='text-white font-semibold font-barlow'>Stay Connected</p>
            <div id='service-icon' className='flex items-center cursor-pointer justify-center p-2  border-neutral-700 items-start rounded-lg'>
                <FaFacebookSquare className='text-primary md:text-[18px]' fontSize={28} />
            </div>
            <div id='service-icon' className='flex items-center cursor-pointer justify-center p-2  border-neutral-700 items-start rounded-lg'>
                <FaSquareInstagram className='text-primary md:text-[18px]' fontSize={28} />
            </div>
            <div id='service-icon' className='flex items-center cursor-pointer justify-center p-2  border-neutral-700 items-start rounded-lg'>
                <FaLinkedin className='text-primary md:text-[18px]' fontSize={28} />
            </div>
        </div>
      </div>

      {/* <div className={`${toggle ? 'bg-primary' : 'bg-none'} flex relative p-2 rounded-md sm:hidden space-x-4`}>
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
      </div> */}
    </nav>
  )
}

export default Footer