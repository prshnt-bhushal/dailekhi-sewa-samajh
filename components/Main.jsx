import React from 'react'
import Carousel from './Carousel'
import {BiRightArrow} from 'react-icons/bi'

const Main = () => {
  return (
    <>
    {/* Carousel */}
    <Carousel />
    <div className="w-full h-screen text-center">
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
        {/* embedded map */}
        <div className='w-full h-36'>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d353.51049338326686!2d85.32864997175557!3d27.7051307996466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1684554198044!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Main