import React, {useEffect} from 'react'
import { navLinks } from '../constants/constants'
import { NavLink, Link } from 'react-router-dom'
import { Logo, Menu } from '../assets'
import { FaFacebookSquare, FaMailBulk } from "react-icons/fa";
import { FaMapLocation,  FaSquareInstagram, FaSquarePhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])

  return (
    <nav className='w-full border-t-[1px] border-l-0 border-r-0 border-b-0 border-active bg-background border-b-[1px] border-active px-6 sm:px-16 items-center flex-col flex py-8'>
      <div className='flex flex-col gap-12 w-full md:flex-row md:justify-between'>
            <div data-aos='fade-right' className='w-full iems-center justify-center'>
                <Link to={'/'}>
                <img src={Logo} className='w-[35%]' />
                </Link>
            </div>

            <ul className='list-none grid grid-cols-2 md:flex md:flex-row w-full gap-3'>
                {navLinks.map((link) =>(
                <NavLink to={link.path}>
                    <li data-aos='fade-up' key={link.id}  className={`text-white font-barlow p-3 text-md rounded-md cursor-pointer hover:text-primary`}>
                        {link.label}
                    </li>
                </NavLink>
                ))}
            </ul>

            <div data-aos='fade-left' className='rounded-lg border-[1px] border-active py-3 gap-3 mb-6 flex justify-center items-center w-full'>
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
    
        <div data-aos='' className='flex w-full justify-between border-t-[1px] border-active items-center md:pt-8 flex-col md:flex-row'>
            <div className='w-full flex-col items-center  md:flex-row flex gap-6'>
                <div className='flex w-full justify-center border-t-[1px] md:border-none border-active gap-4 pt-6 md:py-0 md:gap-2 items-center '>
                    <FaMailBulk fontSize={24} className='text-primary' />
                    <a href='mailto:devbriankariuki@gmail.com' className='font-barlow justify-center text-white hover:text-primary'>hello@squareup.com</a>
                </div>
                <div className='flex w-full justify-center border-t-[1px] md:border-none border-active gap-4 pt-6 md:py-0 md:gap-2 items-center '>
                    <FaSquarePhone fontSize={24} className='text-primary' />
                    <a href='tel:+254703814228' className='font-barlow justify-center text-white hover:text-primary'>(+254) 703-814228</a>
                </div>
                <div className='flex w-full justify-center border-t-[1px] md:border-none border-active gap-4 pb-6 pt-6 md:py-0 md:gap-2 items-center '>
                    <FaMapLocation fontSize={24} className='text-primary' />
                    <p  className='font-barlow justify-center text-white hover:text-primary'>Nairobi, Kenya</p>
                </div>
            </div>
            <div data-aos='' className='w-full pt-6 md:py-0 border-t-[1px] md:border-none flex justify-center md:justify-end border-active'>
                <p className='font-barlow text-white'>© 2023 SquareUp. All rights reserved.</p>
            </div>
        </div>
      
    </nav>
  )
}

export default Footer