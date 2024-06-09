import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../CommonComponents/Loading/Loading";
import { PiArrowArcLeft, PiArrowFatLeft, PiArrowLeftBold, PiTrash } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface LogDetailCardParams {
  log: {
    _id: string;
    log: string;
    deviceInfo: string;
    location: {
      latitude: string;
      longitude: string;
    };
    startTime: string;
    endTime: string;
  };
}

const LogDetailCard = ({ log }: LogDetailCardParams) => {
  const [address, setAdress] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  useEffect(() => {
    const getGeocode = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${log.location.latitude}&lon=${log.location.longitude}&zoom=18&addressdetails=1`
        );
        const data = response.data;
        if (data && data.display_name) {
          setAdress(data.display_name);
        } else {
          console.log("No results found");
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    if (log?.location.latitude && log?.location.latitude) {
      getGeocode();
    }
  }, [log?.location.latitude, log?.location.longitude]);

  return (
    <>
    {
      loading ? 
      <Loading/> :
      <div className="col-span-4 bg-gradient-to-tr from-[rgba(255,255,255,.1)] to-[rgba(43,84,231,1)] text-white p-[1px] rounded-2xl drop-shadow-md w-[700px]">
      <div className="rounded-2xl bg-gradient-to-tr from-[rgba(47,54,97,1)] to-[rgb(47,54,97)] text-sm w-full px-4 py-4 flex flex-col gap-3 justify-start h-full">
         <div className="flex item-center justify-between">
          <PiArrowFatLeft onClick={()=>navigate("/logs")} className="w-[2em] h-[2em] text-fontColor hover:text-white hover:scale-110 cursor-pointer transition-all"/>
        </div>
        <div className="flex item-center justify-between">
          <div className="flex gap-2">
            <h3 className="text-fontColor opacity-50">Start Time</h3>
            <span className="text-fontColor">{formatDate(log.startTime)}</span>
          </div>
          <div className="flex gap-2">
            <h3 className="text-fontColor opacity-50">End Time</h3>
            <span className="text-fontColor">{formatDate(log.endTime)}</span>
          </div>
        </div>

        <div className="py-12 text-2xl">
          {log.log}
        </div>

        <div className="flex gap-2">
            <h3 className="text-fontColor opacity-50">Device Info</h3>
            <span className="text-fontColor">{log.deviceInfo}</span>
          </div>

        <div className="flex gap-2">
            <h3 className="text-fontColor opacity-50">Address</h3>
            <span className="text-fontColor">{address}</span>
        </div>

 
      </div>


    </div>
    }
    </>
  );
};

export default LogDetailCard;
