import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactSection = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])
    

  return (
    <div className={`border-b-[1px] justify-center items-center flex flex-col border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}>
        <div className='flex bg-cover border-[1px] gap-6 border-active w-[100%] sm:w-[70%] py-12 px-4 md:px-6 flex-col justify-center items-center'>
            <div className='flex justify-between gap-6 flex-col w-full md:flex-row'>
                <div data-aos='fade-right' className='flex flex-col border-[1px] border-[#3D3D3D] md:w-[50%] bg-active gap-3 rounded-lg px-5 py-3'>
                    <label className='font-barlow text-lg w-full text-md text-white'>Full Name</label>
                    <input type='text' placeholder='Type here' className='border-b-[1px] border-[#3D3D3D] focus:ring-0 focus:border-primary border-l-0 border-r-0 border-t-0 text-md px-0 bg-active font-barlow text-primary focus:outline-none ' />
                </div>
                <div data-aos='fade-left' className='flex flex-col border-[1px] border-[#3D3D3D] md:w-[50%] bg-active gap-4 rounded-xl px-5 p-3'>
                    <label className='font-barlow text-lg w-full text-md text-white'>Email</label>
                    <input type='email' placeholder='Type here' className='border-b-[1px] border-[#3D3D3D] focus:ring-0 focus:border-primary border-l-0 border-r-0 border-t-0  text-md px-0 bg-active font-barlow text-primary focus:outline-none' />
                </div>
            </div>
            <div  data-aos='fade-down' className='flex flex-col border-[1px] border-[#3D3D3D] w-full bg-active gap-6 rounded-lg px-5 py-3'>
                <label className='font-barlow text-lg w-full text-md text-white'>Why are you contacting us?</label>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='flex items-center gap-3'>
                        <input type='checkbox' id='Web Design' className='w-5 h-5 cursor-pointer rounded bg-active focus:ring-0 focus:outline-none' />
                        <label for='Web Design' className='text-white cursor-pointer font-barlow'>Web Design</label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type='checkbox' id='Web Design' className='w-5 h-5 cursor-pointer rounded bg-active focus:ring-0 focus:outline-none' />
                        <label for='Web Design' className='text-white cursor-pointer font-barlow'>Collaboration</label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type='checkbox' id='Web Design' className='w-5 h-5 cursor-pointer rounded bg-active focus:ring-0 focus:outline-none' />
                        <label for='Web Design' className='text-white cursor-pointer font-barlow'>Mobile App Design</label>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input type='checkbox' id='Web Design' className='w-5 h-5 cursor-pointer rounded bg-active focus:ring-0 focus:outline-none' />
                        <label for='Web Design' className='text-white cursor-pointer font-barlow'>Others</label>
                    </div>
                </div>
            </div>
            <div data-aos='fade-up' className='flex flex-col border-[1px] border-[#3D3D3D] w-full bg-active gap-3 rounded-lg px-5 py-3'>
                <label className='font-barlow text-lg w-full text-md text-white'>Your Budget</label>
                <label className='font-barlow text-sm w-full text-md text-white'>Slide to indicate your budget range</label>
                    <div>
                    <label
                        for="customRange2"
                        class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >Budget</label>
                    <input
                        type="range"
                        class="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                        min="100"
                        max="1000"
                        id="customRange2" />
                    </div>
            </div>
            <div data-aos='zoom-in' className='flex flex-col border-[1px] border-[#3D3D3D] w-full bg-active gap-3 rounded-lg px-5 py-3'>
                <label className='font-barlow text-lg w-full text-md text-white'>Your Message</label>
                <textarea maxlength="50"  rows="3" cols="50" className='border-b-[1px] border-[#3D3D3D] focus:ring-0 focus:border-primary border-l-0 border-r-0 border-t-0 text-md px-0 bg-active font-barlow text-primary focus:outline-none' placeholder='Type here'/>
            </div>
            <button data-aos='zoom-in' type='submit' className='bg-primary sm:w-[30%] font-barlow font-semibold text-lg w-full py-3 rounded-lg'>Submit</button>
        </div>
    </div>
  )
}

export default ContactSection