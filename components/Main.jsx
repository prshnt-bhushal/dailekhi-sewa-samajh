import React from 'react'
import Carousel from './Carousel'
import {BiRightArrow} from 'react-icons/bi'

const Main = () => {
  return (
    <>
    {/* Carousel */}
    <Carousel />
    <div className="h-screen mx-10">
      <div className='mb-3'>
        <h1 className='text-2xl'>Site Notice</h1>
        <div className='border-box p-3'>
          <p>Site Announcement</p>
        </div>
      </div>
      <div className='mx-3 bg-[#d2dbe6]'>
        <div className='p-3 border-2 border-gray-500'>
          <h1>Courses category</h1>
          <div className='flex items-center justify-end'>
            <BiRightArrow/>
            <span>Show all</span>
          </div>
          <div className='m-2 p-3'>
            <div className='m-1 '>class10</div>
            <div>class9</div>
            <div>class8</div>
            <div>class7</div>
            <div>class6</div>
            <div>class5</div>
            <div>class4</div>
            <div>class3</div>
            <div>class2</div>
            <div>class1</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main