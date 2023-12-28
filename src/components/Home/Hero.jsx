import React, {useEffect} from 'react'
import { HeroBg } from '../../assets'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])

  return (
    <div id='Hero' className={`border-b-[1px] bg-cover bg-center border-r-[1px] px-6 border-l-[1px] border-active w-full`}>
        <div className='flex gap-8 sm:py-24 py-20 items-center flex-col'>
            <h1 data-aos='zoom-in' className='text-white font-barlow sm:text-6xl text-4xl text-center font-semibold leading-[60px]'>A Digital Product Studio<br className='hidden sm:flex' /> that will work</h1>
            <div className='bg-active sm:hidden rounded-md my-4 p-4 border-2 border-active'>
                <p className='text-graytext font-barlow text-center text-lg'>For startups, enterprise leaders, media & publishers, and social good.</p>
            </div>
            <div data-aos='fade-up' className='bg-background hidden sm:flex rounded-md p-6 border-2 border-active'>
                <p className='text-graytext font-barlow text-center text-lg'>For 
                    <span data-aos='fade-right' className='text-white cursor-pointer p-2 mx-[3px] bg-active rounded-md'>Startups</span> ,
                    <span data-aos='fade-up' className='text-white cursor-pointer p-2 mx-[3px] bg-active rounded-md'> Enterprise Leaders </span> , 
                    <span data-aos='fade-down' className='text-white cursor-pointer p-2 mx-[3px] bg-active rounded-md'> Media & Publishers </span> and
                    <span data-aos='fade-left' className='text-white cursor-pointer p-2 mx-[3px] bg-active rounded-md'> Social Good </span>
                </p>
            </div>
            <div className='flex gap-4'>
                <Link data-aos='fade-right' to={'works'}>
                    <button className='font-barlow text-white border-2 border-active bg-active py-3 px-5 rounded-md'>Our Works</button>
                </Link>
                <Link data-aos='fade-left' to={'contact'}>
                    <button className='font-barlow text-black font-medium bg-primary py-3 px-5 rounded-md'>Contact Us</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero