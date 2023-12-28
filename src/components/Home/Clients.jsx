import React,{useEffect} from 'react'
import { adobe, amazon, slack, spotify, zapier, zoom } from '../../assets/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Clients = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])

  return (
    <div id='clients' className={`border-b-[1px] justify-center flex border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}>
        <div data-aos='zoom-in' id='clients-trusted' className='bg-background absolute flex justify-center items-center mx-auto w-[250px] rounded-full border-[1px] border-active py-3 px-5'>
            <p className='font-barlow text-md font-medium text-white '>Trusted By 250+ Companies</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-6 w-full items-center my-16 md:justify-between'>
            <div data-aos='flip-right' className='w-full cursor-pointer sm:border-none border-r-[1px] border-l-[1px] border-b-[1px] border-active md:py-0 py-8 flex items-center justify-center sm:px-10'>
                <img src={adobe} className='md:w-[90%]' />
            </div>
            <div data-aos='flip-right' className='w-full cursor-pointer sm:border-none border-r-[1px] border-l-[1px] border-b-[1px] border-active md:py-0 py-8 flex items-center justify-center sm:px-10'>
                <img src={amazon} className='md:w-[90%]' />
            </div>
            <div data-aos='flip-right' className='w-full cursor-pointer sm:border-none border-r-[1px] border-l-[1px] border-b-[1px] border-active md:py-0 py-8 flex items-center justify-center sm:px-10'>
                <img src={slack} className='md:w-[90%]' />
            </div>
            <div data-aos='flip-left' className='w-full cursor-pointer sm:border-none border-r-[1px] border-l-[1px] border-b-[1px] border-active md:py-0 py-8 flex items-center justify-center sm:px-10'>
                <img src={spotify} className='md:w-[90%]' />
            </div>
            <div data-aos='flip-left' className='w-full cursor-pointer sm:border-none border-r-[1px] border-l-[1px] border-b-[1px] border-active md:py-0 py-8 flex items-center justify-center sm:px-10'>
                <img src={zapier} className='md:w-[90%]' />
            </div>
            <div data-aos='flip-left' className='w-full cursor-pointer sm:border-none border-r-[1px] border-l-[1px] border-b-[1px] border-active md:py-0 py-8 flex items-center justify-center sm:px-10'>
                <img src={zoom} className='md:w-[90%]' />
            </div>
        </div>
    </div>
  )
}


export default Clients;