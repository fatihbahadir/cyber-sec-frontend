import React from "react";
import { useNavigate } from "react-router-dom";

interface EmailCardProps {
  email: {
    _id: string;
    subject: string;
    receivedTime: string;
    senderName: string;
    receivedByName: string;
    body: string;
  };
}

const EmailCard = ({ email }: EmailCardProps) => {
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
    <div onClick={()=>navigate(`/emails/${email._id}`)} className="col-span-4 hover:bg-strokeBlue cursor-pointer hover:scale-105 transition-all bg-gradient-to-tr from-[rgba(255,255,255,.1)] to-[rgba(43,84,231,1)] text-white p-[1px] rounded-2xl drop-shadow-md h-[200px]">
      <div className="rounded-2xl bg-gradient-to-tr from-[rgba(47,54,97,1)] to-[rgb(47,54,97)] text-sm w-full px-4 py-4 flex flex-col gap-3 justify-start h-full">
        <div className="flex gap-2">
          <h3 className="text-fontColor opacity-50">Received on</h3>
          <span className="text-fontColor">{formatDate(email.receivedTime)}</span>
        </div>
        <h2 className="text-lg text-fontColor">{email.subject.length > 50 ? email.subject.slice(0,50) + "..." : email.subject }</h2>
 
        <div className="mt-auto flex gap-2 -mb-3">
          <h3 className="text-fontColor opacity-50">Sender</h3>
          <span className="text-fontColor">{email.senderName}</span>
        </div>
        <div className="flex gap-2">
          <h3 className="text-fontColor opacity-50">Receiver</h3>
          <span className="text-fontColor">{email.receivedByName}</span>
        </div>
      </div>
    </div>
  );;
};

export default EmailCard;
