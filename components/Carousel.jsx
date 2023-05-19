import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
import coverImg1 from '../public/Images/cover1.jpg'
import coverImg2 from '../public/Images/cover2.jpg'
import coverImg3 from '../public/Images/cover3.jpg'

const Carousel = () => {
    const [currentIndex, setCurrentIndex]=useState(0);
    const images =[
        coverImg1,
        coverImg2,
        coverImg3
    ];

    const nextSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevSlide = () =>{ 
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  return (
    <div className="relative border-2 border-solid border-gray-100  pt-[120px] ">
      <div className="flex items-center justify-center">
        <button
          className="absolute text-white border-2 border-solid border-white left-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
          onClick={prevSlide}
        >
          <BsFillArrowLeftSquareFill />
        </button>
        <Image 
          className="w-screen h-[500px] z-1"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
        <button
          className=" text-white absolute border-2 border-solid border-white right-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
          onClick={nextSlide}
        >
          <BsFillArrowRightSquareFill />
        </button>
      </div>
    </div>
  )
}

export default Carousel
