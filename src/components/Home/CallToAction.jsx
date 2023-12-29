import React,{useEffect} from 'react'
import { LogoIcon } from '../../assets'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const CallToAction = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])


  return (
    <div  className={`border-b-[1px] justify-center flex flex-col border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}>
        <div id='calltoaction' className='flex bg-cover w-full py-16 px-5 flex-col justify-center items-center'>
            <img data-aos='zoom-out' src={LogoIcon} />
            <h1 data-aos='fade-right'  className='font-barlow text-white font-semibold items-center hover:text-primary text-center py-4 text-3xl'>Thank you for your Interest in SquareUp.</h1>
            <p data-aos='fade-left' className='text-neutral-300 font-barlow  text-center md:w-[80%] pb-3 text-lg'>We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
            <Link data-aos='fade-up'  className='w-full flex items-center justify-center' to={'contact'}>
                <button className='bg-primary sm:w-[20%] font-barlow py-4 mt-4 rounded-lg font-semibold w-full '>Start Project</button>
            </Link>
        </div>
    </div>
  )
}


export default CallToAction