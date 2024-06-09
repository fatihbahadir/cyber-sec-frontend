import React from "react";
import { useNavigate } from "react-router-dom";

interface LogCardProps {
  log: {
    _id: string;
    log: string;
    deviceInfo: string;
    location: {
      latitude: "";
      longitude: "";
    };
    startTime: string;
    endTime: string;
  };
}
const LogCard = ({ log }: LogCardProps) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };
  return (
    <div onClick={()=>navigate(`/logs/${log._id}`)} className="col-span-4 hover:bg-strokeBlue cursor-pointer hover:scale-105 transition-all bg-gradient-to-tr from-[rgba(255,255,255,.1)] to-[rgba(43,84,231,1)] text-white p-[1px] rounded-2xl drop-shadow-md h-[200px]">
      <div className="rounded-2xl bg-gradient-to-tr from-[rgba(47,54,97,1)] to-[rgb(47,54,97)] text-sm w-full px-4 py-4 flex flex-col gap-3 justify-start h-full">
        <div className="flex gap-2">
          <h3 className="text-fontColor opacity-50">Received on</h3>
          <span className="text-fontColor">{formatDate(log.endTime)}</span>
        </div>
        <h2 className="text-lg text-fontColor">{log.deviceInfo}</h2>
        <div className="flex items-center gap-3">
          <span className="bg-strokeBlue text-fontColor rounded-xl py-1 px-2 text-xs">{log.log.slice(0, 5)} </span>
          <span className="bg-strokeBlue text-fontColor rounded-xl py-1 px-2 text-xs">{log.log.slice(5, 10)}</span>
          <span className="bg-strokeBlue text-fontColor rounded-xl py-1 px-2 text-xs">{log.log.slice(10, 15)}</span>

        </div>
        <p className="mt-auto text-fontColor opacity-50">
          {log.location.latitude} - {log.location.longitude}
        </p>
      </div>
    </div>
  );
};

export default LogCard;
