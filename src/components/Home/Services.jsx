import React, {useEffect} from 'react'
import { OurServices } from '../../constants/constants'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])

  return (
    <div className={`border-b-[1px] justify-center flex flex-col border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}>
        <div id='services' className='flex bg-stretch py-5 px-5 flex-col justify-center items-center'>
            <h1 data-aos='fade-up' className='font-barlow text-white font-semibold hover:text-primary py-3 text-4xl'>Our Services</h1>
            <p data-aos='fade-left' className='text-white font-barlow text-center pb-3 text-lg'>Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </div>
        <div className='flex flex-col items-start md:flex-row'>
            {OurServices.map((service)=>(
                <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.desc} />
            ) )}
        </div>
    </div>
  )
}

const ServiceCard = ({icon, title, description}) => (
    <div className='w-full border-[0.8px] border-active flex flex-col px-4 md:px-8 py-6 justify-center'>
        <div className='flex my-5 items-center md:flex-col md:items-start gap-6'>
            <div  data-aos='fade-up-left' id='service-icon' className='flex items-center justify-center p-3  border-neutral-700 items-start rounded-lg'>
                <img  src={icon} />
            </div>
            <div data-aos='fade-up-right' className='text-white font-barlow text-xl hover:text-primary  font-semibold'>{title}</div>
        </div>
        <div data-aos='zoom-in' className={`text-neutral-400 md:h-[200px] text-md font-barlow`}>{description}</div>
        <button data-aos='fade-right' className='bg-active w-full py-3 rounded-lg text-white hover:bg-primary hover:text-background hover:font-medium font-barlow mt-6'>Learn More</button>
    </div>
)

export default Services