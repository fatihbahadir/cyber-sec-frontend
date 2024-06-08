import { Outlet } from 'react-router-dom'
import Ellipse from "../../assets/ellipse.png";
import Vector from "../../assets/Vector.png";

import Sidebar from '../../components/CommonComponents/Sidebar/Sidebar';

const MainLayout = () => {
  return (
    <div className='h-screen w-screen bg-main relative overflow-hidden flex'>
        <div className='w-[537px] h-[537px] object-contain absolute right-44 top-3'>
            <img src={Ellipse} className='w-full h-full '/>
        </div>
        <div className='w-[537px] h-[537px] object-contain absolute right-44 top-3'>
            <img src={Vector} className='w-full h-full '/>
        </div>
        <Sidebar/>
        <div className='ml-[240px] w-full'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout
