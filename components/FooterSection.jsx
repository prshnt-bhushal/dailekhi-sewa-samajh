import Link from 'next/link'
import React from 'react'
import {FaFacebookF, FaTwitter} from 'react-icons/fa'

const FooterSection = () => {
  return (
    <footer className='flex w-full h-10 justify-center p-2 items-center bg-slate-300'>
    {/* copyright section */}
    <div>
      <p> © 2022 Copyrights, दैलेखी सेवा समाज |</p>
    </div>
    {/* social handle section */}
    <div className='flex w-24 mx-2'>
      <Link href='/'>
        <div className='m-2'>
          <FaFacebookF/>
        </div>
      </Link>
      <Link href='/'>
        <div className='m-2'>
          <FaTwitter/>
        </div>
      </Link>
    </div>
    </footer>
  )
}

export default FooterSection
