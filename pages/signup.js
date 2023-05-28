import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dailekhMap from "../public/Images/dailekhMap.png";
import axios from "axios";
import { useRouter } from "next/navigation";

const signup = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/signup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    // const data = await res.data;
    // return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    //send http request
    sendRequest().then(() => router.push("/login"));
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
          name="name"
          value={inputs.name}
          required
          className="m-2 p-2 rounded-lg w-64 cursor-pointer bg-slate-100 hover:bg-white"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={inputs.email}
          required
          className="m-2 p-2 rounded-lg w-64 cursor-pointer bg-slate-100 hover:bg-white"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={inputs.password}
          required
          className="m-2 p-2 rounded-lg w-64 cursor-pointer bg-slate-100 hover:bg-white"
          onChange={handleChange}
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
};

export default signup;
