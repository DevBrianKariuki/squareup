import React from 'react'
import { ClientTestimonials } from '../../constants/constants'

const Testimonials = () => {
  return (
    <div className={`border-b-[1px] justify-center flex flex-col border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}>
        <div id='testimonials' className='flex bg-cover w-full py-6 px-5 flex-col justify-center items-center'>
            <h1 className='font-barlow text-white font-semibold items-center hover:text-primary text-center py-4 text-3xl'>What our Clients say About us</h1>
            <p className='text-neutral-300 font-barlow  text-center md:w-[80%] pb-3 text-lg'>At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us</p>
        </div>
        <div className='grid w-full grid-cols-1 md:grid-cols-2 flex-col items-start'>
            {ClientTestimonials.map((testimonial)=>(
                <TestimonialCard key={testimonial.id} image={testimonial.image} heading={testimonial.heading}  
                content={testimonial.content} photo={testimonial.photo} name={testimonial.name} designation={testimonial.designation}
                />
            ) )}
        </div>
    </div>
  )
}

const TestimonialCard = ({image, heading, content, photo, name, designation}) => (
    <div className='w-full border-[0.8px] border-active flex flex-col px-4 md:px-8 py-6 justify-center'>
        <div className='flex my-5 items-center md:items-center gap-6'>
            <div id='service-icon' className='flex items-center justify-center p-3  border-neutral-700 items-start rounded-lg'>
                <img src={image} />
            </div>
            {/* <div className='text-white font-barlow text-xl hover:text-primary  font-semibold'>{title}</div> */}
        </div>
        {/* <div className={`text-neutral-400 md:h-[100px] text-md py-3 font-barlow`}>{description}</div> */}
    </div>
)

export default Testimonials