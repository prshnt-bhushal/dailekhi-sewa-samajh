import React from 'react'
import MapComponent from '@/components/MapComponent'
import FeedBackBox from '@/components/FeedBackBox'

const  contact = () => {
  return (
    <div className='pt-[80px] mx-10'>
      <h1 className='uppercase text-xl'>contact</h1>
      {/* form and message */}
      <div className='flex md:flex-row sm:flex-row justify-between items-center flex-col'>
        <div className='w-full h-full rounded-2xl relative border border-gray-950 text-xl basis-[69%] p-5'>
          <h2>FeedBack</h2>
          <FeedBackBox/>
        </div>
        <div className='w-full h-full rounded-2xl relative border border-gray-950 text-xl basis-[25%] p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim culpa sit eaque similique ducimus dolorem consequatur ipsum nihil nesciunt repudiandae quidem fugiat fuga necessitatibus, quasi deserunt quibusdam? Ipsa veniam quae excepturi vero? Voluptate, doloremque unde? Nihil voluptatem unde nobis animi illo iste mollitia in eum? Iure aliquam blanditiis a? Error?
        </div>
      </div>
    {/* embedded map */}
    <div className='flex h-[400px] justify-between items-center'>
      <div className='w-full h-full p-4'>
        <MapComponent/>
      </div>
      <div className='m-2'>
        <h1>You can find us near Pipalbot, Dillibazzar</h1>
      </div>
    </div>
    </div>
  )
}

export default  contact