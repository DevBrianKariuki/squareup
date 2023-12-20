import React from 'react'
import { HeroBg } from '../../assets'

const Hero = () => {
  return (
    <div id='Hero' className={`border-b-[1px] bg-cover bg-center border-r-[1px] px-6 border-l-[1px] border-active w-full`}>
        <div className='flex gap-8 py-16 items-center flex-col'>
            <h1 className='text-white font-barlow text-4xl text-center font-semibold leading-[60px]'>A Digital Product Studio that will Work</h1>
            <div className='bg-active rounded-md p-4 border-2 border-active'>
                <p className='text-graytext font-barlow text-center text-lg'>For startups, enterprise leaders, media & publishers, and social good.</p>
            </div>
            <div className='flex gap-4'>
                <button className='font-barlow text-white bg-active py-3 px-5 rounded-md'>Our Works</button>
                <button className='font-barlow text-black font-medium bg-primary py-3 px-5 rounded-md'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Hero