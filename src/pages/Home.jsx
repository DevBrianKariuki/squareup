import React from 'react'
import { Hero,Clients } from '../components/Home'
import styles from '../styles'

const Home = () => {
  return (
    <div className='bg-background overflow-hidden w-full h-[100vh] overflow-hidden'>
      <div className='sm:mx-16'>
        <Hero />
        <Clients />
      </div>
    </div>
  )
}

export default Home