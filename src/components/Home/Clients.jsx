import React from 'react'
import { adobe, amazon, slack, spotify, zapier, zoom } from '../../assets/Home'

const Clients = () => {
  return (
    <div id='clients' className={`border-b-[1px] bg-cover bg-center border-r-[1px] px-6 border-l-[1px] border-active w-full`}>
        <div className='flex gap-8 sm:py-24 py-20 items-center flex-col'>
            <h1 className='text-white font-barlow sm:text-6xl text-4xl text-center font-semibold leading-[60px]'>A Digital Product Studio<br className='hidden sm:flex' /> that will Work</h1>
            <div className='bg-active sm:hidden rounded-md my-4 p-4 border-2 border-active'>
                <p className='text-graytext font-barlow text-center text-lg'>For startups, enterprise leaders, media & publishers, and social good.</p>
            </div>
            <div className='bg-background hidden sm:flex rounded-md p-6 border-2 border-active'>
                <p className='text-graytext font-barlow text-center text-lg'>For 
                    <span className='text-white cursor-pointer p-2 mx-[3px] bg-active rounded-md'>Startups</span> ,
                    <span className='text-white cursor-pointer p-2 mx-[3px] bg-active rounded-md'> Enterprise Leaders </span> , 
                    <span className='text-white cursor-pointer p-2 mx-[3px] bg-active rounded-md'> Media & Publishers </span> and
                    <span className='text-white cursor-pointer p-2 mx-[3px] bg-active rounded-md'> Social Good </span> .
                </p>
            </div>
            <div className='flex gap-4'>
                <button className='font-barlow text-white border-2 border-active bg-active py-3 px-5 rounded-md'>Our Works</button>
                <button className='font-barlow text-black font-medium bg-primary py-3 px-5 rounded-md'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Clients;