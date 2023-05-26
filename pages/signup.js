import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dailekhMap from "../public/Images/dailekhMap.png";

const signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({ name, email, password});
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
        <input
          type="text"
          value={name}
          required
          className="m-2 p-2 rounded-lg w-64 cursor-pointer bg-slate-100 hover:bg-white"
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
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
        <button
          className="m-2 p-2 uppercase rounded-md bg-slate-400 w-32"
          type="submit"
        >
          Signup
        </button>
        <span>
          Already have an Account?
          <Link href="/login">
            <span className="ml-2 text-md uppercase hover:text-[#607e91]">
              Login
            </span>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default signup