import { RiLogoutCircleLine } from "react-icons/ri";
import FatihImg from "../../../assets/fatih.png";
import useLogout from '../../../hooks/useLogout';
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useUser from "../../../hooks/useUser";
import axios from "../../../services/api";


const HomeNav = () => {
  const logout = useLogout();
  const { auth } = useAuth();
  const { user, setUser } = useUser();

  const getUser = async () => {
    try {
      const userResponse = await axios.get("/user", {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      setUser(userResponse.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    !user.username && getUser();
  }, []);
  
  return (
    <div className='flex flex-col '>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col items-start'>
          <h2 className='text-2xl text-white'>Cyber <span className='!text-fontColor opacity-60'>Dashboard</span></h2>
          <p className='text-fontColor text-xs opacity-80'>keylogging & email collection</p>
        </div>
        <div className='flex flex-row gap-4 items-center justify-center'>
          <div className='w-[45px] h-[45px] object-contain rounded-lg p-1 bg-orange-600'>
            <img className='' src={FatihImg} alt="User"/>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <h6 className='text-fontColor text-base'>{user.username}</h6>
            <h6 className='text-fontColor text-sm opacity-40 -mt-1'>{Object.keys(user.roles)[0]}</h6>
          </div>
          <div className='relative flex items-center justify-center'>
            <div
              className='w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center bg-[#2F3661]'
            >
              <RiLogoutCircleLine onClick={logout} className='text-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
