import React from 'react'
import Card from '@/components/sm-blocks/Card'

const FeaturedCards = () => {
  return (
    <div className='flex flex-col gap-16'>
      <h1 className='text-5xl'>Featured Jackets</h1>
      <div className='grid grid-cols-1 place-items-center sm:grid-cols-3 gap-4'>
        <Card title="Jacket 1" src="/immg.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
        <Card title="Jacket 1" src="/immg.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
        <Card title="Jacket 1" src="/immg.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." />
      </div>
    </div>
  )
}

export default FeaturedCards
