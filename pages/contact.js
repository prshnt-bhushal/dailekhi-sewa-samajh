import React from 'react'
import MapComponent from '@/components/MapComponent'
import FeedBackBox from '@/components/FeedBackBox'

const  contact = () => {
  return (
    <div className="pt-[80px] w-screen h-full">
      {/* form and message */}
      <div className="flex flex-col w-full h-full p-10 justify-center items-center bg-[#b4b7bc] md:flex-row">
        {/* Introduction section*/}
        <div className="text-justify px-3 m-2 basis-[70%]">
          <p className="w-full text-2xl uppercase">Feel Free to let us Know</p>
        </div>
        <div className="p-3 m-2 basis-[30%] ">
          <FeedBackBox />
        </div>
      </div>
      {/* embedded map */}
      <div className="flex flex-col w-full h-full p-10 justify-center items-center bg-white md:flex-row">
        {/* Introduction section*/}
        <div className="p-3 m-2 basis-[70%] ">
          <MapComponent />
        </div>
        <div className="text-justify px-3 m-2 basis-[30%]">
          <p className="w-full text-2xl uppercase">
            You can find us near Pipalbot, Dillibazzar
          </p>
        </div>
      </div>
    </div>
  );
}

export default  contact