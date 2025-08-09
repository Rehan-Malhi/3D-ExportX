import React from 'react'
import { CardSpotlightDemo } from '../sm-blocks/Card-spt'

const WhyChooseUs = () => {
  return (
    <div className='flex flex-col gap-16 my-20 bg-gradient-to-b from-emerald-900 via-emerald-800 to-gray-900 py-12'>
      <h1 className='text-5xl bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent font-bold'>Why Choose Us</h1>
      <div className='grid grid-cols-1 place-items-center lg:grid-cols-2 gap-4'>
        <CardSpotlightDemo title= "Premium Quality" description="We use the finest fabrics and precise stitching for lasting comfort." />
        <CardSpotlightDemo title= "3D Preview" description="See your jacket in 360° before you buy with our 3D ExportX tech." />
        <CardSpotlightDemo title= "Eco-Friendly" description="Sustainably sourced materials, because the planet matters." />
        <CardSpotlightDemo title= "WorldWide Shipping" description="Fast, reliable delivery to over 100 countries." />
      </div>
    </div>
  )
}

export default WhyChooseUs
