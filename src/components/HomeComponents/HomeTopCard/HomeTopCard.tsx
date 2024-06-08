import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Loading from '../../CommonComponents/Loading/Loading';
import { IconType } from 'react-icons/lib';

interface HomeTopCardProps {
  logCount: number,
  type: string,
  Icon: IconType
}

const HomeTopCard = ({ logCount, type, Icon }: HomeTopCardProps) => {

  return (
    <div className="col-span-2 bg-gradient-to-tr from-[rgba(255,255,255,0.1)] to-[rgba(43,84,231,1)] text-white p-[1px] rounded-2xl drop-shadow-md"> 
      <div className='bg-[#2F3661] rounded-2xl flex flex-col gap-4 items-center justify-center py-8'>
      <div className="col-span-2 bg-gradient-to-b from-[rgba(255,255,255,0.24)] to-[rgba(255,255,255,0)] text-white p-[1px] rounded-[25px] drop-shadow-md"> 
        <div className='flex items-center justify-center bg-[#252A4C] w-[69px] h-[69px] rounded-[25px]'>
            <div className='w-[40px] h-[40px] flex items-center justify-center bg-gradient-to-br from-[rgba(43,118,231,0.64)] to-[rgba(196,196,196,0)] rounded-full'>
                <Icon className='w-[20px] h-[20px]'/>
            </div>
        </div>
    </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm opacity-70 text-fontColor'>{type}</p>
            <h3 className='text-3xl text-fontColor opacity-100'>{logCount}</h3>
        </div>
        </div>
    </div>
  )
}

export default HomeTopCard;
