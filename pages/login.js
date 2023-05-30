import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import dailekhMap from "../public/Images/dailekhMap.png";
import LoadingSpinner from "@/components/LoadingSpinner";
import { shakeInputs } from "@/components/Paragraph";

const login = () => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    return res.data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.email.trim() || !inputs.password.trim()) {
      shakeInputs();
    } else {
      setLoading(true);
      setTimeout(() => {
        // console.log({ inputs });
        //send http request
        sendRequest().then(() => router.push("/profile"));
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="w-screen flex h-screen relative bg-[#0e2331] justify-center items-center">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="md:flex h-screen p-10 justify-center items-center">
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
              name="email"
              value={inputs.email}
              className="m-2 p-2 rounded-lg w-64 cursor-pointer bg-slate-100 hover:bg-white"
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={inputs.password}
              className="m-2 p-2 rounded-lg w-64 cursor-pointer bg-slate-100 hover:bg-white"
              onChange={handleChange}
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
        </div>
      )}
    </div>
  );
};

export default login;
