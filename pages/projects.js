import Table from '@/components/Table';
import React from 'react'

const projects = () => {
  return (
    <div className="pt-[80px] w-screen h-full">
      {/* Events Section */}
      <div className="flex flex-col w-full h-full p-10 justify-center items-start bg-white md:flex-row">
        <div className="px-3 m-2 basis-[80%]">
          <Table taskName={'EVENTS'} />
        </div>
        {/* Introduction section*/}
        <div className="text-justify px-3 m-2 basis-[20%]">
          <h2 className="uppercase p-1 text-3xl mb-2 bg-slate-300">Events</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            commodi maxime doloribus dicta similique expedita culpa voluptatum
          </p>
        </div>
      </div>
      {/* Project Section */}
      <div className="flex flex-col w-full h-full p-10 justify-center items-start bg-[#b4b7bc] md:flex-row">
        {/* Introduction section*/}
        <div className="text-justify px-3 m-2 basis-[40%]">
          <h2 className="uppercase p-1 text-3xl mb-2">Projects</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officia
            commodi maxime doloribus dicta similique expedita culpa voluptatum
          </p>
        </div>
        <div className="px-3 m-2 basis-[60%]">
          <Table taskName={'PROJECTS'} />
        </div>
      </div>
    </div>
  );
}

export default projects