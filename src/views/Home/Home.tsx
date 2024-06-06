import React, { useEffect, useState } from 'react'
import FatihImg from "../../assets/fatih.png";
import { PiCaretDown } from 'react-icons/pi';
import useAuth from '../../hooks/useAuth';
import axios from '../../services/api';
import useLoading from '../../hooks/useLoading';
import Loading from '../../components/CommonComponents/Loading/Loading';
import HomeNav from '../../components/HomeComponents/HomeNav/HomeNav';

const Home = () => {
  
  const { auth } = useAuth();
  const [user, setUser] = useState({
    username: "",
    roles: {}
  });

  const fetchUser = async () => {
    const userResponse = await axios.get("/user", {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });
    return userResponse.data;
  }

  const { execute: getOneUser, isLoading, error } = useLoading(fetchUser);


  const getUser = () => {
    getOneUser()
      .then((res) => {
        setUser(res.data);
        
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(()=>{
    getUser();
  }, [])


  return (
    <>
      {
        isLoading ?
        <div className='w-full h-full flex items-center justify-center'>
            <Loading/>
        </div>
         :
        <HomeNav user={user}/>
      }
    </>

  )
}

export default Home
