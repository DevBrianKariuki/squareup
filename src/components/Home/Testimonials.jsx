import React from 'react'
import { ClientTestimonials } from '../../constants/constants'
import { Link } from 'react-router-dom'

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
    <div className='w-full md:h-[320px] border-[0.8px] border-active flex flex-col px-6 md:px-8 py-16 justify-center'>
        <div>
            <p className='text-[#D8FF99] font-medium font-barlow text-lg py-3'>{heading}</p>
        </div>
        <div>
            <p className='font-barlow text-neutral-400 py-3'>{content}</p>
        </div>
        <div className='flex justify-between items-center pt-4 p-2 rounded-lg border-2 border-active'>
            <div className='flex items-center gap-2'>
                <img src={image} />
                <div className='flex flex-col'>
                    <p className='font-barlow font-semibold text-white'>{name}</p>
                    <p className='font-barlow text-sm text-neutral-300'>{designation}</p>
                </div>
            </div>
            <div>
                <Link to={'#'}>
                    <button className='bg-active hidden sm:flex border-2 border-neutral-700 text-white py-2 rounded-md px-3 font-barlow'>Open Website</button>
                </Link>
            </div>
        </div>
    </div>
)

export default Testimonials