import React, { useState } from "react";
import { FAQS } from '../../constants/constants'

const FAQs = () => {
    
  return (
    <div className={`border-b-[1px] justify-center flex flex-col border-r-[1px] relative md:mx-0 border-l-[1px] border-active w-full`}>
        <div id='faqs' className='flex bg-cover w-full py-6 px-5 flex-col justify-center items-center'>
            <h1 className='font-barlow text-white font-semibold items-center hover:text-primary text-center py-4 text-3xl'>Frequently Asked Questions</h1>
            <p className='text-neutral-300 font-barlow  text-center md:w-[80%] pb-3 text-lg'>Still you have any questions? Contact our Team via hello@squareup.com</p>
        </div>
        <div className='grid w-full grid-cols-1 md:grid-cols-2 flex-col items-start'>
            {FAQS.map((faq)=>(
                <FAQCard key={faq.number} number={faq.no} description={faq.desc} title={faq.title}  />
            ) )}
        </div>
    </div>
  )
}

const FAQCard = ({number, title, description}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);
    return(
    <div className="py-6 px-4 flex border-[1px] border-active justify-between flex-col w-full">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between h-[60px] items-center gap-6 justify-between w-full"
      >
        <div id="service-icon" className={`${accordionOpen ? 'text-primary' : 'text-white' } p-2 font-barlow font-semibold text-xl rounded-lg`}>{number}</div>
        <span className={`${accordionOpen ? 'text-primary' : 'text-white' }  font-barlow font-medium text-md sm:text-lg text-left`}>{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-primary shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`${accordionOpen ? 'md:h-[70px]' : '' } overflow-hidden  text-neutral-300 font-barlow text-md py-2`}>{description}</div>
      </div>
    </div>
    )

}

export default FAQs