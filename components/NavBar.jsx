import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu,AiOutlineCloseCircle} from 'react-icons/ai'
import { useRouter } from 'next/router'

const navbar = ({isLoggedIn}) => {
    const router = useRouter();
    const [nav, setNav]= useState(false);
    const handleLogout =() =>{
        //perform logout action
    axios
    .get("http://localhost:5000/api/logout", { withCredentials: true })
    .then((response) => {
      console.log(response.data.message);
      // Redirecting to login page
      router.push("/login");
    })
    .catch((error) => {
      console.log(error);
      // Handle error
    });
    }
    const handelNav=()=>{
        setNav(!nav);
    };

  return (
    <div className= 'fixed w-full h-20 shadow-xl z-[100] bg-slate-300'>
      <div className='flex justify-between items-center w-full h-full px-2 xl:px-10'>
       <div className=' flex items-center overflow-hidden'>
        <Link href='/'>
          <Image src='/../public/Images/dailekhi-logo.png' alt='Main Logo' width='150' height='50'/>
        </Link>
        <div className='mr-3 justify-center cursor-default'>
          <h3>दैलेखी सेवा समाज</h3>
          <span>काठमाडौँ, नेपाल</span>
        </div>
        <Image src='/../public/Images/waveFlag.gif' alt='Waving Flag' width='25' height='25'/>
       </div>
       <div className='flex justify-center items-center'>
        <ul className='hidden md:flex'>
          <Link href='/'>
             <li className={`ml-10 text-sm uppercase hover:text-[#607e91] ${router.pathname === '/' ? 'font-bold underline' : ''}`}>Home</li>
          </Link>
          <Link  href='/about'>
              <li className={`ml-10 text-sm uppercase hover:text-[#607e91] ${router.pathname === '/about' ? 'font-bold underline' : ''}`}>About us</li>
          </Link>
          <Link  href='/blog'>
              <li className={`ml-10 text-sm uppercase hover:text-[#607e91] ${router.pathname === '/blog' ? 'font-bold underline' : ''}`}>Blog</li>
          </Link>
          <Link href='/gallery'>
              <li className={`ml-10 text-sm uppercase hover:text-[#607e91] ${router.pathname === '/gallery' ? 'font-bold underline' : ''}`}>Gallery</li>
          </Link>
          <Link href='/projects'>
              <li className={`ml-10 text-sm uppercase hover:text-[#607e91] ${router.pathname === '/projects' ? 'font-bold underline' : ''}`}>Projects</li>
          </Link>
          <Link  href='/contact'>
              <li className={`ml-10 text-sm uppercase hover:text-[#607e91] ${router.pathname === '/contact' ? 'font-bold underline' : ''}`}>Contact</li>
          </Link>

            {isLoggedIn && (
                <li className='ml-10 text-sm uppercase hover:text-[#607e91]' onClick={()=>{
                    // Prevent user from navigating back to the page after logout
                    window.history.replaceState(null, "", "/logout");
                    handleLogout();
                    isLoggedIn= false;
                }}>Logout</li>
            )}
        </ul>
        <div onClick={handelNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={25} />
        </div>
       </div>
      </div>
      <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70':''} onClick={()=> setNav(false)}>
            <div className={nav?'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-300 p-10 ease-in duration-500':'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <div className='flex items-center'>
                      <Link href='/' scroll={false} onClick={()=> setNav(false)}>
                       <Image src='/../public/Images/schoollogo.png' alt='Main Logo' width='65' height='60'/>
                    </Link>
                    <div className='mx-3 justify-center cursor-default'>
                      <h3>दैलेखी सेवा समाज</h3>
                      <span>काठमाडौँ, नेपाल</span>
                     </div>
                    </div>
                    <div onClick={handelNav} className='p-3 cursor-pointer text-2xl'>
                        <AiOutlineCloseCircle/>
                     </div>
                    </div>
                    <div className=' border-y border-gray-900 my-4 justify-items-center'>
                        <p className='md:w-[90%] p-4 '>सहयोग नै पुन्ने हो। </p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase '>
                        <Link scroll={false} href='/#home' onClick={()=> setNav(false)} >
                            <li className={`py-4 text-sm  hover:text-[#607e91] ${router.pathname === '/' ? 'font-bold underline' : ''}`}>Home</li>
                        </Link>
                        <Link scroll={false} onClick={()=> setNav(false)} href='/about'>
                            <li className={`py-4 text-sm  hover:text-[#607e91] ${router.pathname === '/about' ? 'font-bold underline' : ''}`}>About Us</li>
                        </Link>
                        <Link scroll={false} onClick={()=> setNav(false)} href='/blog'>
                            <li className={`py-4 text-sm  hover:text-[#607e91] ${router.pathname === '/blog' ? 'font-bold underline' : ''}`}>Blog</li>
                        </Link>
                        <Link scroll={false} onClick={()=> setNav(false)} href='/gallery'>
                            <li className={`py-4 text-sm  hover:text-[#607e91] ${router.pathname === '/gallery' ? 'font-bold underline' : ''}`}>Gallery</li>
                        </Link>
                        <Link scroll={false} onClick={()=> setNav(false)} href='/projects'>
                            <li className={`py-4 text-sm  hover:text-[#607e91] ${router.pathname === '/projects' ? 'font-bold underline' : ''}`}>Projects</li>
                        </Link>
                        <Link scroll={false} onClick={()=> setNav(false)} href='/contact'>
                            <li className={`py-4 text-sm  hover:text-[#607e91] ${router.pathname === '/contact' ? 'font-bold underline' : ''}`}>Contact</li>
                        </Link>

                        {isLoggedIn && (
                        <li className='ml-10 text-sm uppercase hover:text-[#607e91]' onClick={handleLogout}>Logout</li>
                        )}

                    </ul>
                </div>
            </div>
        </div>
    </div>

  )
}

export default navbar
