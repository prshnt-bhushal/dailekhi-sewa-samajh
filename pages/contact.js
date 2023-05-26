import React from 'react'
import MapComponent from '@/components/MapComponent'
import FeedBackBox from '@/components/FeedBackBox'

const  contact = () => {
  return (
    <div className='pt-[80px] mx-10 h-min mb-14 '>
      <h1 className='uppercase text-xl'>contact</h1>
      {/* form and message */}
      <div className='flex md:flex-row sm:flex-row justify-between items-center flex-col'>
        <div className='w-full h-full basis-[70%] border-r border-gray-950 text-2xl uppercase m-2 p-4'>Feel Free to let us Know</div>
        <div className='text-xl basis-[30%] p-5 items-center'>
          <h2 className='pb-2 uppercase w-max'>Your Queries</h2>
          <FeedBackBox/>
        </div>
      </div>
    {/* embedded map */}
    <div className='flex md:flex-row sm:flex-row h-[400px] justify-between items-center flex-col'>
      <div className='w-full basis-[70%] h-full p-4'>
        <MapComponent/>
      </div>
      <div className='m-2 text-2xl uppercase basis-[30%]'>
        You can find us near Pipalbot, Dillibazzar
      </div>
    </div>
    </div>
  )
}

export default  contact