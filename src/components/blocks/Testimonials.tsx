import React from 'react'
import { CardStackDemo } from '@/components/sm-blocks/Multi-card'

const Testimonials = () => {
  return (
    <div className='mt-16'>
      <h1 className='text-5xl'>Testimonials</h1>
      <div className='flex flex-col gap-8 sm:flex-row'>
        <CardStackDemo />
        <CardStackDemo />
      </div>
    </div>
  )
}

export default Testimonials
