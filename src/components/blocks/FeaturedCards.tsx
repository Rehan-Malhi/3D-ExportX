import React from 'react'
import Card from '@/components/sm-blocks/Card'

const FeaturedCards = () => {
  return (
    <div className='flex flex-col mx-12 gap-16 my-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 py-12'>
      <h1 className='text-5xl'>Featured Jackets</h1>
      <div className='grid grid-cols-1 place-items-center lg:grid-cols-3 gap-4'>
        <Card title="Black Jacket" src="/ft-images/img1.png" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
        <Card title="Brown Jacket" src="/ft-images/img2.png" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
        <Card title="Brown Premium Jacket" src="/ft-images/img3.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
      </div>
    </div>
  )
}

export default FeaturedCards
