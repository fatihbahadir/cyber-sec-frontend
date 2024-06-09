import { PiArrowFatLeft } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface EmailDetailCardProps {
  email: {
    _id: string;
    subject: string;
    receivedTime: string;
    senderName: string;
    receivedByName: string;
    body: string;
  };
}

const EmailDetailCard = ({ email }: EmailDetailCardProps) => {
  const navigate = useNavigate();
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="col-span-4 bg-gradient-to-tr from-[rgba(255,255,255,.1)] to-[rgba(43,84,231,1)] text-white p-[1px] rounded-2xl drop-shadow-md w-[700px]">
      <div className="rounded-2xl bg-gradient-to-tr from-[rgba(47,54,97,1)] to-[rgb(47,54,97)] text-sm w-full px-4 py-4 flex flex-col gap-3 justify-start h-full">
        <div className="flex item-center justify-between">
          <PiArrowFatLeft
            onClick={() => navigate("/emails")}
            className="w-[2em] h-[2em] text-fontColor hover:text-white hover:scale-110 cursor-pointer transition-all"
          />
        </div>
        <div className="flex gap-2">
            <h3 className="text-fontColor opacity-50">Recieved Time</h3>
            <span className="text-fontColor">{formatDate(email.receivedTime)}</span>
        </div>

        <div className="py-5 text-xl flex flex-col gap-1">
          <h2>{email.subject}</h2>
          <textarea disabled className="break-words border border-strokeBlue rounded px-5 py-3 text-fontColor text-base resize-none h-[150px] bg-[#252A4C]" value={email.body}></textarea>
        </div>

        <div className="flex gap-2">
            <h3 className="text-fontColor opacity-50">Sender Name</h3>
            <span className="text-fontColor">{email.senderName}</span>
        </div>

        <div className="flex gap-2">
            <h3 className="text-fontColor opacity-50">Reciever Name</h3>
            <span className="text-fontColor">{email.receivedByName}</span>
        </div>
      </div>
    </div>
  );
};

export default EmailDetailCard;
