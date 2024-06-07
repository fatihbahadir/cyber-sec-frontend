import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../services/api";
import Loading from "../../components/CommonComponents/Loading/Loading";
import HomeNav from "../../components/HomeComponents/HomeNav/HomeNav";
import HomeTopCard from "../../components/HomeComponents/HomeTopCard/HomeTopCard";
import useLog from "../../hooks/useLog";
import useEmail from "../../hooks/useEmail";
import { FaApple, FaWindows } from "react-icons/fa";
import {
  PiAddressBook,
  PiAddressBookFill,
  PiKeyboardFill,
  PiMailboxFill,
} from "react-icons/pi";
import HomeTable from "../../components/HomeComponents/HomeTable/HomeTable";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const Home = () => {
  const { auth } = useAuth();
  const { logs, setLogs } = useLog();
  const { emails, setEmails } = useEmail();
  const [user, setUser] = useState({
    username: "",
    roles: {},
  });
  const [loading, setLoading] = useState(false);
  const [macLogCount, setMacLogCount] = useState(0);
  const [windowsLogCount, setWindowsLogCount] = useState(0);
  const [emailSenderCount, setEmailSenderCount] = useState(0);

  const data = {
    labels: ['Windows', 'Mac'],
    datasets: [
      {
        data: [windowsLogCount, macLogCount],
        backgroundColor: [
          '#2BE7AF',
          '#353D6D',
        ],
        borderWidth: 0
      },
    ],
  }


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        fullWidth:true,
        labels: {
          color: '#6C7291',
          usePointStyle: true,
          font: {
            size: 12,
          },
          padding: 9,
        },  
      },

    },
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const requests = [
        axios.get("/user", {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }),
        axios.get(`/log/device/mac/count`, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }),
        axios.get(`/log/device/windows/count`, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }),
        axios.get(`email/sender/count`, {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }),
      ];

      if (logs.length <= 1) {
        requests.push(
          axios.get("/log", {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`,
            },
          })
        );
      }

      if (emails.length <= 1) {
        requests.push(
          axios.get("/email", {
            headers: {
              Authorization: `Bearer ${auth.accessToken}`,
            },
          })
        );
      }

      const responses = await Promise.all(requests);

      setUser(responses[0].data.data);
      setMacLogCount(responses[1].data.data.logCount);
      setWindowsLogCount(responses[2].data.data.logCount);
      setEmailSenderCount(responses[3].data.data.senderCount);

      let logIndex = 4;
      let emailIndex = 4;

      if (logs.length <= 1) {
        setLogs(responses[logIndex].data.data);
        logIndex++;
        emailIndex++;
      }

      if (emails.length <= 1) {
        setEmails(responses[emailIndex].data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col px-8 py-8 gap-8">
          <HomeNav user={user} />
          <div className="grid grid-cols-10 w-full gap-10">
            <HomeTopCard
              logCount={logs.length}
              type={"Total Logs"}
              Icon={PiKeyboardFill}
            />
            <HomeTopCard
              logCount={emails.length}
              type={"Total Emails"}
              Icon={PiMailboxFill}
            />
            <HomeTopCard
              logCount={macLogCount}
              type={"Mac Logs"}
              Icon={FaApple}
            />
            <HomeTopCard
              logCount={windowsLogCount}
              type={"Windows Logs"}
              Icon={FaWindows}
            />
            <HomeTopCard
              logCount={emailSenderCount}
              type={"Email Senders"}
              Icon={PiAddressBookFill}
            />
          </div>

          <div className="grid grid-cols-10 w-full gap-6">
            <HomeTable
              theads={["Reciever", "Sender", "Subject", "Time"]}
              data={emails}
            />
            <div className="col-span-4 bg-gradient-to-tr from-[rgba(255,255,255,0.1)] to-[rgba(43,84,231,1)] text-white p-[1px] rounded-2xl drop-shadow-md">
            <div className=' bg-gradient-to-br from-[rgba(47,54,97,1)] to-[rgb(47,54,97)] h-full rounded-2xl flex flex-col gap-4   py-8'>
                <h2 className="px-4 text-lg text-fontColor">Devices</h2>
                <div className="h-full">
                <Doughnut data={data} options={options} />
                </div>
            </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Home;
