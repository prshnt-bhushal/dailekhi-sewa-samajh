import React from 'react'
import Link from 'next/link'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

const AlwaysInDisplay = () => {
  return (
    <div className='z-10 flex fixed mt-0 w-screen justify-between items-center p-3 bg-slate-600 '>
      <div className='hidden md:block' >
        <ul className='flex justify-center items-center'>
          <BsFillTelephoneFill />
          <h5 className='mx-1'>Call Us:</h5>
          <li className='mx-1 hover:text-[#88b1ca]'>081-000000</li>
          <span>|</span>
          <li className='mx-1 hover:text-[#88b1ca]'>(+977) 9800000000</li>
          <span className='mr-2'>|</span>
          <HiOutlineMail />
          <h5 className='mx-1'>Email:</h5>
          <li className='hover:text-[#88b1ca]'>info@school.com.np </li>
        </ul>
      </div>
      <div className='mx-1 cursor-pointer hover:text-[#88b1ca]'>
        <Link href='/login'>Login</Link>
        </div>
    </div>
  )
}

export default AlwaysInDisplay
