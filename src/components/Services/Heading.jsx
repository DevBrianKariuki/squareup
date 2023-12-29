import React, {useEffect} from 'react'
import { ServicesOffered } from '../../constants/constants'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Heading = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])
    

  return (
    <div className={`border-b-[1px] justify-center flex flex-col border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}>
        <div data-aos='fade-up' id='services' className='flex bg-stretch py-5 px-5 flex-col justify-center items-center'>
            <h1 data-aos="fade-left" className='font-barlow text-white font-semibold hover:text-primary py-3 text-4xl'>Our Services</h1>
            <p data-aos="fade-up" className='text-white font-barlow text-center pb-3 text-lg'>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </div>
        <div className='flex flex-col'>
            {ServicesOffered.map((serviceoffered) => (
                <div className='w-full border-[1px] border-active'>
                    <div className='py-6 w-full px-6 md:px-8 flex gap-4 flex-col'>
                        <h1 data-aos="fade-down" className='text-white font-barlow text-2xl font-semibold'>{serviceoffered.title}</h1>
                        <p data-aos="fade-up" className='text-neutral-300 font-barlow w-full md:w-[80%]'>{serviceoffered.description}</p>
                        <p data-aos="zoom-in" className='text-white my-4 flex items-center font-barlow bg-active rounded-md py-2 px-3'>{serviceoffered.descText}</p>
                    </div>
                    <div className='w-full'>
                        {serviceoffered.services.map((mainservice) =>(
                            <>
                            <div className='border-[1px] px-6 md:px-8 py-6 border-active'>
                                <div data-aos="fade-right" className='text-neutral-400 hover:text-white text-lg font-barlow font-semibold'>{mainservice.serviceTitle}</div>
                            </div>
                            <div className='grid md:grid-cols-4 grid-cols-2'>
                                {mainservice.individualServices.map((individualservice) =>(
                                    <div className='w-full items-start border-[1px]  cursor-pointer border-active py-8 px-6 flex flex-col gap-5'>
                                        <div id='service-icon' data-aos="fade-up-right" className='flex p-2 rounded-lg items-center justify-center'>
                                            <img src={individualservice.icon} className='w-[38px]' />
                                        </div>
                                        <p data-aos="fade-up-left" className='text-white font-barlow hover:text-primary'>{individualservice.title}</p>
                                    </div>
                                ) )}
                            </div>
                            </>
                        ) )}
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

const ServiceBlock = ({ title, description, descText, serviceTitle }) =>(
    <div className='w-full border-[1px] border-active'>
        <div className='py-6 w-full px-6 md:px-8 flex gap-4 flex-col'>
            <h1 className='text-white font-barlow text-2xl font-semibold'>{title}</h1>
            <p className='text-neutral-300 font-barlow w-full md:w-[80%]'>{description}</p>
            <p className='text-white w-[230px] my-4 flex items-center font-barlow bg-active rounded-md py-2 px-3'>{descText}</p>
        </div>
    </div>
)

export default Heading