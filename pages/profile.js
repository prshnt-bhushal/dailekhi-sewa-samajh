import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import axios from "axios";
axios.defaults.withCredentials = true;
let firstRender = true;

const Profile = () => {
  const [user, setUser] = useState(null);


  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const refreshToken = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/refresh", {
        withCredentials: true,
      });
      return res.data;

    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    if (firstRender) {
      sendRequest().then((data) => {
        if (data && data.user) {
          setUser(data.user);
        }
      });
      firstRender = false;
    }
    
    let interval = setInterval(() => {
      refreshToken().then((data) => {
        if (data && data.user) {
          setUser(data.user);
        }
      });
    }, (1000 * 29))

    return () => clearInterval(interval);
  }, []);

  // Call sendRequest again after user logs in
  const handleLoginInital = async () => {
    const data = await sendRequest();
    if (data && data.user) {
      setUser(data.user);
    }
  };
  useEffect(() => {
    const handleLogin = async () => {
      const data = await sendRequest();
      if (data && data.user) {
        setUser(data.user);
      }
    };
    window.addEventListener('login', handleLogin);
    handleLoginInital();
    return () => window.removeEventListener('login', handleLogin);
  }, []);

  return (
    <div>
      <NavBar isLoggedIn={true} />
      {user ? (
        <div>
          <div className="pt-[100px] h-screen">
            <p>Welcome, {user.name}!</p>
          </div>
          <button>logOut</button>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
