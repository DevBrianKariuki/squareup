import React, {useEffect} from 'react'
import { WhyChooseUsReasons } from '../../constants/constants'
import AOS from 'aos'
import 'aos/dist/aos.css'

const WhyChooseUs = () => {

    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])

  return (
    <div className={`border-b-[1px] justify-center flex flex-col border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}>
        <div id='whychooseus' className='flex bg-cover w-full py-6 px-5 flex-col justify-center items-center'>
            <h1  data-aos='fade-up' className='font-barlow text-white font-semibold items-center hover:text-primary py-4 text-3xl'>Why Choose SquareUp?</h1>
            <p  data-aos='fade-left' className='text-white font-barlow  text-center  pb-3 text-lg'>Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
        </div>
        <div className='grid w-full grid-cols-1 md:grid-cols-2 flex-col items-start'>
            {WhyChooseUsReasons.map((whychoseus)=>(
                <WhyChooseUsCard key={whychoseus.id} icon={whychoseus.icon} title={whychoseus.title} description={whychoseus.desc} />
            ) )}
        </div>
    </div>
  )
}

const WhyChooseUsCard = ({icon, title, description}) => (
    <div  className='w-full border-[0.8px] border-active flex flex-col px-4 md:px-8 py-6 justify-center'>
        <div className='flex my-5 items-center md:items-center gap-6'>
            <div data-aos='fade-up-right' id='service-icon' className='flex items-center justify-center p-3  border-neutral-700 items-start rounded-lg'>
                <img src={icon} />
            </div>
            <div data-aos='fade-down' className='text-white font-barlow text-xl hover:text-primary  font-semibold'>{title}</div>
        </div>
        <div data-aos='fade-left' className={`text-neutral-400 md:h-[100px] text-md py-3 font-barlow`}>{description}</div>
    </div>
)

export default WhyChooseUs