import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dailekhMap from "../public/Images/dailekhMap.png";
import LoadingSpinner from '@/components/LoadingSpinner';

const login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ email, password});
    };

  return (
    <div className="md:flex h-full p-10 justify-center items-center pt-[90px]">
      <div>
        <Image
          className="w-[600px] rounded-md  h-[600px] z-1"
          src={dailekhMap}
          alt={`Map of Dailekh`}
        />
      </div>

      <form
        className="flex justify-center items-center shadow-md shadow-gray-800 flex-col m-10 p-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl mb-7 uppercase">Welcome Back</h1>
        <input
          type="email"
          value={email}
          required
          className="m-2 p-2 rounded-lg w-64 cursor-pointer bg-slate-100 hover:bg-white"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          required
          className="m-2 p-2 rounded-lg w-64 cursor-pointer bg-slate-100 hover:bg-white"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <span className="m-2 text-[#dbae1c] text-md cursor-pointer hover:text-[#ffcf48]">
          Forget Your Password?
        </span>
        <button
          className="m-2 p-2 uppercase rounded-md bg-slate-400 w-32"
          type="submit"
        >
          Login
        </button>
        {/* <span>
            New User?
          <Link href="/signup">
            <span className="ml-2 text-md uppercase hover:text-[#607e91]">
              signup
            </span>
          </Link>
        </span> */}
      </form>
      <LoadingSpinner/>
    </div>
  );
}

export default login