import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navbar = () => {
  return (
    <div className='z-10 flex fixed mt-0 w-screen p-3 bg-[#ded1d1] '>
      <div className='flex mx-2 justify-between w-screen'>
      <div className='flex'>
        <div>
        <Link href='/#home'>
                <Image src='/../public/Images/schoollogo.png' alt='school logo' width='75' height='25'/>
            </Link>
      </div>
      <div className='py-4 px-2 cursor-pointer'>
        <h3>दैलेखी सेवा समाज</h3>
        <span>काठमाडौँ, नेपाल</span>
      </div>
      </div>
      <div className='m-1  py-4 px-2'>
        <ul className='flex justify-between'>
          <li className='mx-1 text-lg hover:bg-[#b5b3b3]'><Link href='/home'>Home</Link></li>
          <li className='mx-1 text-lg hover:bg-[#b5b3b3]'><Link href='/home'>About US</Link></li>
          <li className='mx-1 text-lg hover:bg-[#b5b3b3]'><Link href='/home'>Projects</Link></li>
          <li className='mx-1 text-lg hover:bg-[#b5b3b3]'><Link href='/home'>Contact US</Link></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default navbar
