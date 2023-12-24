import React from 'react'
import { Hero,Clients, Services, WhyChooseUs, Testimonials, FAQs, CallToAction } from '../components/Home'
import styles from '../styles'

const Home = () => {
  return (
    <div className='bg-background overflow-hidden overflow-hidden'>
      <div className='sm:mx-16'>
        <Hero />
      </div>
      <div className='sm:mx-16 mx-6'>
          <Clients />
          <Services />
          <WhyChooseUs />
          <Testimonials />
          <FAQs />
          <CallToAction />
        </div>
    </div>
  )
}

export default Home